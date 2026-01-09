import React from 'react';
import { ShoppingCart, Download, Shield } from 'lucide-react';

export const AssetShowcase: React.FC = () => {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-tech-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* The Product 3D */}
        <div className="lg:col-span-7 flex justify-center perspective-1000 relative">
          
          {/* Containment Field Graphics */}
          <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
          <div className="absolute -top-6 left-0 text-[10px] font-mono text-tech-cyan">ASSET_ID: FALCON_KILL_V1</div>
          
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-tech-cyan"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-tech-cyan"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-tech-cyan"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-tech-cyan"></div>

          <div className="relative group transform hover:scale-105 transition-transform duration-500 py-12 px-8">
            {/* Book Simulation */}
             <div className="w-[300px] h-[460px] bg-gray-900 rounded-r-lg shadow-2xl relative overflow-hidden transform rotate-y-[-15deg] group-hover:rotate-y-0 transition-transform duration-700">
                {/* Cover Art */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black p-6 flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    
                    <div className="relative z-10">
                        <p className="text-tech-cyan font-mono text-xs mb-4">MAX MONROE FILES</p>
                        <h2 className="text-5xl font-display font-bold text-white leading-none">THE<br/>FALCON'S<br/><span className="text-alert-red">KILL</span></h2>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <div className="w-full h-40 bg-alert-red/20 border border-alert-red/50 rounded flex items-center justify-center backdrop-blur-sm mb-6">
                            <Shield size={64} className="text-white opacity-80" />
                        </div>
                        <p className="text-white font-display text-xl uppercase tracking-widest text-right">Robert<br/>Monroe Turner</p>
                    </div>
                </div>
                
                {/* Spine Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/20 blur-sm"></div>
             </div>

             {/* Reflection/Shadow */}
             <div className="absolute -bottom-12 left-0 right-0 h-12 bg-black/50 blur-xl rounded-[50%] transform scale-x-75"></div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-3xl font-display text-white font-bold mb-2">ACQUIRE ASSET</h3>
            <p className="text-tech-cyan font-mono text-sm">AUTHORIZATION LEVEL: PUBLIC</p>
          </div>

          <div className="space-y-4">
            {/* Main Option */}
            <div className="bg-white/5 border border-tech-cyan/30 p-6 rounded hover:bg-white/10 transition-colors cursor-pointer group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-tech-cyan text-cyber-black text-[10px] font-bold uppercase font-mono">
                  Best Value
               </div>
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold font-display text-lg group-hover:text-tech-cyan transition-colors">Physical Hardcopy</h4>
                    <p className="text-gray-400 text-xs mt-1">First Edition, Signed, + Digital Map</p>
                  </div>
                  <span className="text-2xl font-display font-bold text-white">$24.99</span>
               </div>
               <button className="w-full bg-tech-cyan text-cyber-black font-bold py-3 uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors">
                  <ShoppingCart size={16} />
                  Initiate Transfer
               </button>
            </div>

            {/* Secondary Option */}
            <div className="bg-transparent border border-gray-700 p-6 rounded hover:border-gray-500 transition-colors cursor-pointer group">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold font-display text-lg group-hover:text-gray-300 transition-colors">Digital Download</h4>
                    <p className="text-gray-400 text-xs mt-1">ePub, Mobi, PDF (DRM-Free)</p>
                  </div>
                  <span className="text-xl font-display font-bold text-gray-400">$12.99</span>
               </div>
               <button className="w-full border border-gray-600 text-gray-300 font-bold py-3 uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:border-white hover:text-white transition-colors">
                  <Download size={16} />
                  Instant Access
               </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
             <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                SECURE TRANSACTION
             </div>
             <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                256-BIT ENCRYPTION
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};
