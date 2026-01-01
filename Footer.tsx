
import React from 'react';
import { Github, Twitter, Youtube, Instagram, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Abyssal Depth Indicator */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-5 pointer-events-none">
        <div className="flex flex-col h-full justify-between py-10 px-4 border-l border-white/20">
          {[1,2,3,4,5,6,7,8].map(i => <span key={i} className="text-[8px] font-mono">{i}000m</span>)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                 <span className="text-white font-gaming font-black text-xl italic">N</span>
              </div>
              <span className="font-gaming font-black text-2xl tracking-tighter text-white uppercase">Project <span className="text-zinc-800">Nest</span></span>
            </div>
            <p className="text-zinc-600 text-sm max-w-sm font-light leading-relaxed italic">
              "When the tide rose, we didn't drown. We integrated. 
              The Drowned World awaits its next pioneer."
            </p>
            <div className="flex items-center gap-3 text-red-950 font-mono text-[10px] uppercase tracking-widest">
               <ShieldAlert size={14} />
               <span>Warning: Long-term exposure to deep pressure may cause hallucinations.</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-[0.4em] text-[10px] mb-8 text-zinc-500">Navigation</h4>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest">
              <li><a href="#" className="text-zinc-600 hover:text-cyan-900 transition-colors">Manifesto</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-cyan-900 transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-cyan-900 transition-colors">Asset Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-[0.4em] text-[10px] mb-8 text-zinc-500">Neural Link</h4>
            <div className="flex gap-4">
              {[Twitter, Youtube, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-700 hover:text-white hover:border-zinc-500 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 grayscale opacity-30">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 mb-1">RATING_BOARD</span>
              <img src="https://picsum.photos/40/40?random=100" alt="Rating" className="h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 mb-1">DEV_STUDIO</span>
              <div className="h-8 w-20 bg-zinc-800" />
            </div>
          </div>
          <div className="text-center md:text-right">
             <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.5em] mb-1">
               Project Nest // 2024 Release Candidate
             </p>
             <p className="text-[8px] font-mono text-zinc-800 uppercase">
               All characters and locations are property of the Nest Administration Council.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
