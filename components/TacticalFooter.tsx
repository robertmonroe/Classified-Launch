import React from 'react';
import { Send, Twitter, Facebook, Instagram, Shield } from 'lucide-react';

export const TacticalFooter: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-24">
       <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
             
             {/* Brand */}
             <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4 text-white">
                   <Shield className="text-tech-cyan" size={24} />
                   <span className="font-display font-bold tracking-wider">AGENCY</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                   Secure communication channels established. All transmissions are encrypted.
                </p>
             </div>

             {/* Links */}
             <div className="col-span-1">
                <h4 className="text-white font-mono text-xs font-bold mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                   <li><a href="#" className="hover:text-tech-cyan transition-colors">Mission Brief</a></li>
                   <li><a href="#" className="hover:text-tech-cyan transition-colors">Operatives</a></li>
                   <li><a href="#" className="hover:text-tech-cyan transition-colors">Asset Store</a></li>
                   <li><a href="#" className="hover:text-tech-cyan transition-colors">Press Inquiries</a></li>
                </ul>
             </div>

             {/* Newsletter */}
             <div className="col-span-1 md:col-span-2">
                <h4 className="text-white font-mono text-xs font-bold mb-4 uppercase tracking-wider">Join The Network</h4>
                <div className="flex">
                   <input 
                     type="email" 
                     placeholder="ENCRYPTED EMAIL ADDRESS" 
                     className="bg-gray-900 border border-gray-700 text-white px-4 py-3 w-full font-sans text-sm focus:outline-none focus:border-tech-cyan transition-colors placeholder-gray-600 rounded-l-sm"
                   />
                   <button className="bg-tech-cyan text-cyber-black px-6 hover:bg-white transition-colors rounded-r-sm">
                      <Send size={18} />
                   </button>
                </div>
                <p className="text-[10px] text-gray-600 mt-2">
                   Warning: By joining, you accept the risk of knowing too much.
                </p>
             </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono">
             <div className="flex gap-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
             </div>
             
             <div className="flex gap-6">
                <span>© 2024 ROBERT MONROE TURNER</span>
                <a href="#" className="hover:text-white">PRIVACY</a>
                <a href="#" className="hover:text-white">TERMS</a>
             </div>
          </div>

       </div>
    </footer>
  );
};
