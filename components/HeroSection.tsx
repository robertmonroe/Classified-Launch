import React from 'react';
import { Play, Disc } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      
      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 w-[200%] h-[50vh] bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.1)_100%)] [transform:perspective(1000px)_rotateX(60deg)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-alert-red/30 bg-alert-red/10 text-alert-red text-xs font-mono tracking-widest">
              <span className="w-2 h-2 bg-alert-red rounded-full animate-pulse"></span>
              CRITICAL THREAT DETECTED
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter">
              THE <br/>
              FALCON'S <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-red to-orange-600 relative">
                KILL
                <span className="absolute -inset-1 animate-glitch opacity-50 text-alert-red mix-blend-overlay">KILL</span>
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
               <div className="h-full border-l-2 border-tech-cyan pl-6 py-2">
                  <h2 className="text-xl md:text-2xl font-display text-white mb-1">
                    MAX MONROE <span className="text-gray-500">RETURNED</span>
                  </h2>
                  <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                    In a world of digital shadows, the only way to survive is to become invisible. The Syndicate has a new weapon. Monroe is the only glitch in their system.
                  </p>
               </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <button className="bg-white text-cyber-black hover:bg-tech-cyan transition-colors px-8 py-4 font-display font-bold uppercase tracking-wider text-sm clip-path-polygon">
                 Read System Log (Preview)
               </button>
               <button className="border border-gray-700 text-gray-300 hover:border-tech-cyan hover:text-tech-cyan transition-colors px-8 py-4 font-display font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                 <Play size={16} fill="currentColor" />
                 Watch Briefing
               </button>
            </div>
        </div>

        {/* HUD Visual */}
        <div className="lg:col-span-4 relative hidden lg:block">
           <div className="relative w-full aspect-square border border-white/5 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center p-8">
              <div className="absolute inset-0 rounded-full border border-tech-cyan/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Radar Swipe */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                 <div className="w-1/2 h-1/2 bg-gradient-to-br from-tech-cyan/20 to-transparent absolute top-0 left-0 origin-bottom-right animate-[spin_3s_linear_infinite]"></div>
              </div>

              <div className="text-center relative z-10">
                 <Disc className="w-16 h-16 text-alert-red mx-auto mb-4 animate-pulse" />
                 <div className="font-mono text-xs text-tech-cyan tracking-widest mb-1">TARGET LOCK</div>
                 <div className="font-display text-4xl font-bold text-white">LOCKED</div>
                 <div className="font-mono text-[10px] text-gray-500 mt-2">DIST: 4,021KM // WIND: 4NW</div>
              </div>

              {/* Decorative HUD Elements */}
              <div className="absolute top-1/2 -left-4 w-8 h-[1px] bg-white/30"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-white/30"></div>
              <div className="absolute -top-4 left-1/2 w-[1px] h-8 bg-white/30"></div>
              <div className="absolute -bottom-4 left-1/2 w-[1px] h-8 bg-white/30"></div>
           </div>
        </div>
      </div>
    </section>
  );
};
