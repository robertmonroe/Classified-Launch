import React from 'react';
import { User, Activity, Fingerprint } from 'lucide-react';

export const AuthorProfile: React.FC = () => {
  return (
    <section className="relative mt-24">
       
       {/* Tech Divider */}
       <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] flex-1 bg-gray-800"></div>
          <div className="text-gray-600 font-mono text-xs tracking-widest">IDENTITY VERIFICATION</div>
          <div className="h-[1px] flex-1 bg-gray-800"></div>
       </div>

       <div className="bg-cyber-dark border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Fingerprint size={200} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
             
             {/* Avatar HUD */}
             <div className="relative">
                <div className="w-40 h-40 rounded-full p-1 border-2 border-tech-cyan/30 border-dashed relative">
                   <div className="absolute inset-0 rounded-full animate-spin-slow border-t-2 border-tech-cyan opacity-50"></div>
                   <img 
                     src="https://picsum.photos/id/1062/400/400" 
                     alt="Author" 
                     className="w-full h-full rounded-full object-cover grayscale contrast-125"
                   />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cyber-black border border-tech-cyan/50 px-3 py-1 rounded-full flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-mono text-tech-cyan whitespace-nowrap">VERIFIED</span>
                </div>
             </div>

             {/* Info */}
             <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                   <h3 className="font-display text-3xl text-white font-bold mb-1">ROBERT MONROE TURNER</h3>
                   <p className="font-mono text-tech-cyan text-sm">FORMER INTELLIGENCE ANALYST // CLASS A</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-white/5 py-4">
                   <div className="flex items-center gap-3 justify-center md:justify-start">
                      <User size={16} className="text-gray-500" />
                      <div className="text-left">
                         <div className="text-[10px] text-gray-500 font-mono">CODE NAME</div>
                         <div className="text-white text-sm font-bold">ARCHITECT</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Activity size={16} className="text-gray-500" />
                      <div className="text-left">
                         <div className="text-[10px] text-gray-500 font-mono">STATUS</div>
                         <div className="text-white text-sm font-bold">OPERATIONAL</div>
                      </div>
                   </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                   Turner doesn't just write spy thrillers; he lived them. After a decade in [REDACTED], he turned his experience into the <span className="text-white font-bold">Max Monroe</span> series. Critics call it fiction. The agency calls it a leak.
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-tech-cyan text-sm font-bold hover:text-white transition-colors group">
                   <span>ACCESS FULL DOSSIER</span>
                   <span className="group-hover:translate-x-1 transition-transform">-></span>
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};
