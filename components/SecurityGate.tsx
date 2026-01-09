import React, { useState, useEffect } from 'react';
import { Scan, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SecurityLevel } from '../types';

interface SecurityGateProps {
  onAccessGranted: () => void;
}

export const SecurityGate: React.FC<SecurityGateProps> = ({ onAccessGranted }) => {
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'SUCCESS'>('IDLE');
  const [scanLine, setScanLine] = useState(0);

  const startScan = () => {
    setStatus('SCANNING');
  };

  useEffect(() => {
    if (status === 'SCANNING') {
      const interval = setInterval(() => {
        setScanLine((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus('SUCCESS');
            return 100;
          }
          return prev + 1.5;
        });
      }, 20);
      return () => clearInterval(interval);
    }
    
    if (status === 'SUCCESS') {
      const timeout = setTimeout(() => {
        onAccessGranted();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [status, onAccessGranted]);

  return (
    <div className="fixed inset-0 z-50 bg-cyber-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute w-full h-full bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg p-1">
        
        {/* Main Interface */}
        <div className="bg-cyber-dark/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 text-center relative overflow-hidden tech-border">
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-tech-cyan"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-tech-cyan"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-tech-cyan"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-tech-cyan"></div>

          <div className="mb-12">
             <h2 className="text-tech-cyan font-mono text-xs tracking-[0.5em] mb-2 uppercase">Restricted Area</h2>
             <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">
               Identity <span className="text-gray-500">Verification</span>
             </h1>
          </div>

          <div className="relative w-48 h-48 mx-auto mb-12 flex items-center justify-center">
             {/* Reticle Rings */}
             <div className={`absolute inset-0 border border-white/10 rounded-full ${status === 'SCANNING' ? 'animate-spin-slow' : ''}`}></div>
             <div className={`absolute inset-4 border border-tech-cyan/30 rounded-full border-dashed ${status === 'SCANNING' ? 'animate-[spin_4s_linear_infinite_reverse]' : ''}`}></div>
             
             {/* Central Icon */}
             <div className="relative z-10">
                {status === 'IDLE' && <Scan size={48} className="text-gray-500" />}
                {status === 'SCANNING' && <Scan size={48} className="text-tech-cyan animate-pulse" />}
                {status === 'SUCCESS' && <ShieldCheck size={56} className="text-tech-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]" />}
             </div>

             {/* Scanning Beam */}
             {status === 'SCANNING' && (
                <div 
                  className="absolute left-0 right-0 h-1 bg-tech-cyan shadow-[0_0_20px_rgba(0,243,255,1)]"
                  style={{ top: `${scanLine}%`, opacity: 0.8 }}
                ></div>
             )}
          </div>

          <div className="h-16">
            {status === 'IDLE' && (
              <button 
                onClick={startScan}
                className="group relative px-8 py-3 bg-transparent overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-tech-cyan/10 group-hover:bg-tech-cyan/20 transition-all skew-x-[-20deg]"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-tech-cyan shadow-[0_0_10px_#00f3ff]"></div>
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-tech-cyan shadow-[0_0_10px_#00f3ff]"></div>
                <span className="relative font-mono text-tech-cyan tracking-widest text-sm group-hover:text-white transition-colors">
                   > INITIATE SCAN
                </span>
              </button>
            )}

            {status === 'SCANNING' && (
              <div className="w-full max-w-xs mx-auto">
                 <div className="flex justify-between text-[10px] font-mono text-tech-cyan mb-1">
                    <span>ANALYZING BIOMETRICS</span>
                    <span>{Math.round(scanLine)}%</span>
                 </div>
                 <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-tech-cyan shadow-[0_0_10px_#00f3ff]" 
                      style={{ width: `${scanLine}%` }}
                    ></div>
                 </div>
                 <div className="mt-2 text-[10px] text-alert-red font-mono animate-pulse">
                    ENCRYPTION: QUANTUM-SAFE
                 </div>
              </div>
            )}

            {status === 'SUCCESS' && (
              <div className="text-tech-cyan font-display text-xl font-bold tracking-widest animate-pulse">
                ACCESS GRANTED
              </div>
            )}
          </div>

        </div>
        
        <div className="mt-4 flex justify-between text-[10px] font-mono text-gray-600">
           <span>SECURE SERVER: US-EAST-4</span>
           <span>PROTOCOL: 88-ALPHA</span>
        </div>
      </div>
    </div>
  );
};
