import React, { useState } from 'react';
import { SecurityGate } from './components/SecurityGate';
import { HeroSection } from './components/HeroSection';
import { MissionBrief } from './components/MissionBrief';
import { AssetShowcase } from './components/AssetShowcase';
import { AuthorProfile } from './components/AuthorProfile';
import { TacticalFooter } from './components/TacticalFooter';
import { SecurityLevel } from './types';
import { ShieldAlert, Wifi, Battery, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [securityLevel, setSecurityLevel] = useState<SecurityLevel>(SecurityLevel.LOCKED);

  const handleAccessGranted = () => {
    setSecurityLevel(SecurityLevel.GRANTED);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-gray-300 font-sans selection:bg-tech-cyan selection:text-cyber-black relative overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,243,255,0.05),transparent_50%)] z-0 pointer-events-none"></div>

      {securityLevel !== SecurityLevel.GRANTED ? (
        <SecurityGate onAccessGranted={handleAccessGranted} />
      ) : (
        <main className="relative z-10 animate-in fade-in duration-700">
          
          {/* HUD Header */}
          <nav className="fixed top-0 w-full z-40 bg-cyber-black/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-4 md:px-8 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <ShieldAlert className="text-alert-red" size={20} />
                 <span className="absolute inset-0 animate-ping opacity-50 bg-alert-red rounded-full blur-md"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold tracking-widest text-sm leading-none">FALCON PROTOCOL</span>
                <span className="text-[10px] text-tech-cyan font-mono leading-none mt-1">SECURE CONNECTION ESTABLISHED</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse"></span>
                LIVE FEED
              </div>
              <div className="flex items-center gap-2">
                <Wifi size={14} />
                ENCRYPTED
              </div>
              <div className="flex items-center gap-2">
                <Battery size={14} />
                100%
              </div>
            </div>
            
            <div className="md:hidden text-white">
                <Menu />
            </div>
          </nav>

          <HeroSection />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32 pt-12">
             <MissionBrief />
             <AssetShowcase />
             <AuthorProfile />
          </div>

          <TacticalFooter />
          
          {/* Sticky Floating Action Bar */}
          <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-auto z-50">
            <div className="bg-cyber-dark/90 backdrop-blur-xl border border-tech-cyan/30 p-1 rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.1)] flex items-center gap-4 pr-1">
               <div className="hidden md:block px-4 py-2 border-r border-white/10">
                  <p className="text-[10px] text-gray-400 font-mono uppercase">Launch Timer</p>
                  <p className="text-white font-mono font-bold">04:23:12:99</p>
               </div>
               <button className="flex-1 md:flex-none bg-tech-cyan hover:bg-cyan-400 text-cyber-black font-display font-bold py-3 px-8 rounded uppercase tracking-wider text-sm transition-all shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] flex items-center justify-center gap-2">
                 <span>Initiate Order</span>
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                    <path d="M1 1H11V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                 </svg>
               </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;