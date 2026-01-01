
import React from 'react';
import { motion } from 'framer-motion';
import { Play, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Cinematic Background - Darker, Grittier, Drowned Theme */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518107616385-ad30833dd040?auto=format&fit=crop&q=80&w=2000" 
          alt="Post-Apocalyptic Drowned World" 
          className="w-full h-full object-cover opacity-50 contrast-125 saturate-50"
        />
        {/* Gradients to create a claustrophobic, deep-sea/dark-sky feeling */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        
        {/* Atmospheric Particles Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <p className="text-zinc-500 font-mono tracking-[0.4em] uppercase text-xs">
              System Status: Critical // Oxygen: 14%
            </p>
          </div>

          <h1 className="text-6xl md:text-[110px] font-gaming font-black leading-none tracking-tighter text-white">
            PROJECT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-cyan-900 filter drop-shadow-2xl">NEST</span>
          </h1>
          
          <div className="relative">
             <p className="text-2xl md:text-3xl font-mono text-cyan-800/80 mt-2 tracking-widest uppercase italic">
              — The Drowned World —
            </p>
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-cyan-900/40" />
          </div>

          <p className="text-zinc-500 text-lg max-w-xl font-light leading-relaxed">
            심해의 침묵 속에서 메아리치는 인류의 마지막 고동. 
            가라앉은 문명의 잔해 사이에서 당신만의 생존 루트를 개척하십시오.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
            <button className="group relative flex items-center gap-4 bg-zinc-900 border border-zinc-700 px-10 py-5 overflow-hidden hover:border-cyan-700 transition-all">
              <div className="absolute inset-0 bg-cyan-950/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 font-gaming font-bold tracking-widest uppercase text-zinc-300 group-hover:text-cyan-400">Initiate Protocol</span>
              <Play size={18} className="relative z-10 group-hover:scale-110 transition-transform text-cyan-500" />
            </button>
            
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Transmission available</span>
              <button className="text-zinc-400 hover:text-white font-bold tracking-widest uppercase text-sm flex items-center gap-2 group">
                Recover Log 04.22
                <div className="w-8 h-px bg-zinc-700 group-hover:w-12 group-hover:bg-cyan-500 transition-all" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative UI elements for a "worn tech" look */}
      <div className="absolute top-24 right-12 hidden lg:block text-right opacity-40">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Global Flood Index</p>
        <p className="text-2xl font-gaming font-bold text-zinc-300">892.4m</p>
        <div className="w-32 h-1 bg-zinc-800 ml-auto mt-2 overflow-hidden">
          <div className="h-full bg-cyan-900 w-3/4 animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-40">
         <div className="flex flex-col">
           <span className="text-[8px] font-mono text-zinc-600 tracking-tighter uppercase">Lat: 34.22.1N</span>
           <span className="text-[8px] font-mono text-zinc-600 tracking-tighter uppercase">Lon: 128.45.9E</span>
         </div>
         <div className="h-10 w-px bg-zinc-800" />
         <AlertCircle size={20} className="text-red-900 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
