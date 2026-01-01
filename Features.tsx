
import React from 'react';
import { Shield, Droplets, Zap, Target, Database, Wind } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Droplets className="text-cyan-800" />,
      title: "Pressure Mechanics",
      desc: "수심에 따른 압박감을 견디며 산소와 장비 내구도를 관리하는 극한의 서바이벌을 경험하십시오.",
      code: "O2-STABLE"
    },
    {
      icon: <Zap className="text-orange-900" />,
      title: "Scavenged Tech",
      desc: "버려진 도시에서 수집한 고물과 넥서스 부품을 결합하여 자신만의 생존 장비를 조립하십시오.",
      code: "TECH-SCV"
    },
    {
      icon: <Target className="text-zinc-700" />,
      title: "Stealth Tactics",
      desc: "소리조차 삼켜버리는 물속에서 해양 괴수들의 추적을 피하고 조용히 목표를 제거하십시오.",
      code: "SILENT-HUNT"
    },
    {
      icon: <Shield className="text-blue-900" />,
      title: "The NEST Hub",
      desc: "생존자들의 마지막 안식처를 요새화하고 침략자들로부터 인류의 마지막 불꽃을 지키십시오.",
      code: "HUB-SECURED"
    }
  ];

  return (
    <section id="features" className="py-40 bg-[#010204] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-900 font-mono tracking-[0.5em] uppercase text-xs mb-4 block">Survival Protocols // Ver 2.4</span>
            <h2 className="text-5xl md:text-7xl font-gaming font-black tracking-tighter text-white leading-none">
              GEAR UP FOR <br /><span className="text-zinc-800">THE ABYSS</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <div className="flex gap-2 justify-end mb-2">
               {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-4 ${i < 4 ? 'bg-cyan-900' : 'bg-zinc-900'}`} />)}
             </div>
             <p className="font-mono text-[10px] text-zinc-600 uppercase">Operational Capacity: 78%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-900">
          {features.map((f, i) => (
            <div key={i} className="group p-10 bg-zinc-950/50 border-zinc-900 border-r last:border-r-0 hover:bg-zinc-900/80 transition-all duration-500 relative overflow-hidden">
              {/* Card Scanline Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-zinc-900/80 border border-zinc-800 group-hover:border-cyan-900/50 transition-colors">
                    {f.icon}
                  </div>
                  <span className="font-mono text-[8px] text-zinc-700 tracking-widest">{f.code}</span>
                </div>
                
                <h3 className="text-2xl font-gaming font-bold mb-4 text-zinc-300 group-hover:text-white transition-colors">{f.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">{f.desc}</p>
                
                <div className="pt-4 border-t border-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2 text-cyan-900 font-mono text-[10px] uppercase">
                     <Database size={12} />
                     <span>Decrypting Data...</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
