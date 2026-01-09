import React from 'react';
import { Database, Globe, AlertOctagon, Terminal } from 'lucide-react';

export const MissionBrief: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Data Visualization */}
      <div className="order-2 md:order-1 relative">
         <div className="absolute -inset-1 bg-gradient-to-r from-tech-cyan to-blue-600 rounded-lg blur opacity-20"></div>
         <div className="relative bg-cyber-dark border border-white/10 rounded-lg overflow-hidden p-1">
            <div className="bg-black/50 p-2 flex items-center gap-2 border-b border-white/5">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
               </div>
               <div className="flex-1 text-center font-mono text-[10px] text-gray-500">
                  /usr/bin/classified_intel.exe
               </div>
            </div>
            
            <div className="relative h-[400px]">
               <img 
                 src="https://picsum.photos/seed/cyberwar/600/800" 
                 alt="Cyber Warfare" 
                 className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
               />
               
               {/* Overlay Data */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.8)_2px)] bg-[size:100%_4px] pointer-events-none"></div>
               
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-cyber-black/90 backdrop-blur border-l-2 border-tech-cyan p-4">
                     <p className="font-mono text-tech-cyan text-xs mb-1">> DETECTING ANOMALY...</p>
                     <p className="text-white font-display uppercase tracking-wider text-sm">
                        Location: Amazon Server Farm <br/>
                        Status: Compromised
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Briefing Content */}
      <div className="order-1 md:order-2 space-y-8">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-tech-cyan" size={24} />
              <h3 className="font-display text-3xl text-white font-bold uppercase tracking-wide">
                 Decrypted Intel
              </h3>
           </div>
           <div className="h-[1px] w-full bg-gradient-to-r from-tech-cyan/50 to-transparent"></div>
        </div>

        <div className="space-y-6 text-gray-400 font-sans leading-relaxed">
          <p className="text-lg text-white">
            <strong className="text-tech-cyan">CODE: BLACK.</strong> The Syndicate has launched a digital coup.
          </p>
          <p>
             A prototype AI weapon capable of rewriting global weather algorithms has been stolen. Governments are blind. Satellites are dark. 
          </p>
          <p>
            <strong className="text-white">Max Monroe</strong> is the only analog operative in a digital war. Disavowed by his own agency, he must infiltrate the most secure data fortress on Earth.
          </p>
          
          <div className="bg-alert-red/10 border border-alert-red/30 p-4 rounded relative mt-6">
             <AlertOctagon className="absolute -top-3 -left-3 bg-cyber-black text-alert-red" />
             <p className="text-alert-red text-sm font-mono italic">
               "If the Falcon flies, humanity falls. You are the kill switch."
             </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div className="p-4 border border-white/10 bg-white/5 rounded hover:border-tech-cyan/50 transition-colors group">
              <Globe className="text-gray-500 group-hover:text-tech-cyan mb-2 transition-colors" size={20} />
              <div className="text-xs font-mono text-gray-500">THEATER</div>
              <div className="text-white font-display font-bold">GLOBAL / DIGITAL</div>
           </div>
           <div className="p-4 border border-white/10 bg-white/5 rounded hover:border-alert-red/50 transition-colors group">
              <Database className="text-gray-500 group-hover:text-alert-red mb-2 transition-colors" size={20} />
              <div className="text-xs font-mono text-gray-500">STAKES</div>
              <div className="text-white font-display font-bold">TOTAL COLLAPSE</div>
           </div>
        </div>
      </div>
    </section>
  );
};
