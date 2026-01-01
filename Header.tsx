
import React, { useState } from 'react';
import { Menu, X, Radio } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl shadow-black' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-900 transition-colors">
             <span className="text-white font-gaming font-black text-xl italic group-hover:text-cyan-500 transition-colors">N</span>
             <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-900 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-gaming font-black text-lg tracking-tighter text-white">PROJECT <span className="text-zinc-600 group-hover:text-cyan-900 transition-colors">NEST</span></span>
            <span className="text-[8px] font-mono text-zinc-600 tracking-[0.3em] uppercase leading-none">Drowned_World_Svc</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {['Archive', 'Survival', 'Nexus', 'Media'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-900 transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="h-6 w-px bg-zinc-800 mx-2" />
          <button className="px-6 py-2 border border-zinc-800 text-zinc-400 text-[10px] font-mono font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all hover:border-cyan-900">
            Secure Entry
          </button>
        </nav>

        <button className="md:hidden text-zinc-500 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black h-screen p-8 flex flex-col gap-10 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-zinc-900">
          {['Archive', 'Survival', 'Nexus', 'Media'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-3xl font-gaming font-black tracking-tighter uppercase text-zinc-700 hover:text-white transition-colors border-b border-zinc-900 pb-4">
              {item}
            </a>
          ))}
          <button className="w-full py-5 bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono font-bold tracking-[0.5em] uppercase hover:bg-cyan-950/20 transition-all">
            Secure Node
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
