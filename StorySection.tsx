
import React from 'react';
import { motion } from 'framer-motion';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-40 px-6 overflow-hidden bg-[#020406]">
      {/* Background Grunge Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        <div className="flex-1 order-2 lg:order-1 relative group">
           <div className="absolute -inset-10 bg-cyan-900/10 blur-[120px] rounded-full group-hover:bg-cyan-900/20 transition-all duration-1000" />
           <div className="relative border border-white/5 p-2 bg-zinc-950/50 backdrop-blur-sm">
             <img 
              src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1000" 
              alt="Cinematic Story" 
              className="relative rounded-sm shadow-2xl grayscale brightness-50 sepia-[0.2] contrast-125 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
            {/* Corner UI Accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-cyan-500/50" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-cyan-500/50" />
           </div>
           
           <div className="absolute -bottom-12 -left-4 font-mono text-[10px] text-zinc-700 tracking-[0.2em] vertical-text hidden md:block">
             ARCHIVE_ID: 9982-DELTA
           </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2 space-y-10">
          <div className="space-y-2">
            <h3 className="text-zinc-600 font-mono tracking-[0.4em] uppercase text-xs flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-800" />
              Found Footage Archive
            </h3>
            <h2 className="text-4xl md:text-6xl font-gaming font-black leading-tight text-white tracking-tighter">
              잃어버린 세계의<br />
              <span className="text-zinc-500">부식된 기억들.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed max-w-xl">
            <p>
              해수면이 도시의 정수리를 삼킨 뒤, 세상은 깊고 푸른 어둠 속에 갇혔습니다. 
              이제 우리는 문명의 '기억'을 발굴하기 위해 물 밑으로 내려갑니다.
            </p>
            <p>
              발굴된 'Nexus Echo'는 단순한 노이즈가 아니었습니다. 
              그것은 가라앉은 우리 조상들이 남긴, 하지만 우리가 결코 듣지 말았어야 할 마지막 경고였습니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button className="relative overflow-hidden group border border-zinc-800 px-8 py-4 hover:border-cyan-900 transition-colors">
              <span className="relative z-10 font-gaming text-sm font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors">Recover Data Logs</span>
              <div className="absolute inset-0 bg-zinc-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            
            <div className="p-4 bg-zinc-950 border-l-2 border-red-900/50 italic text-zinc-600 text-sm">
              "심연을 들여다볼 때, 심연 또한 당신의 장비를 부식시키고 있다."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
