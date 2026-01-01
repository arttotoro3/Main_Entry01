
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Play, Cpu, Shield, 
  Droplets, Zap, MessageSquare, Info 
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Features from './components/Features';
import NexusAI from './components/NexusAI';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#010204] text-zinc-400 selection:bg-cyan-950/40 selection:text-cyan-200">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Global Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
          
          <StorySection />
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
          
          <Features />
          
          <section id="nexus" className="py-40 px-6 relative overflow-hidden bg-black">
             <div className="absolute inset-0 bg-cyan-950/5 mix-blend-overlay" />
             <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-cyan-950 font-mono tracking-[0.6em] uppercase text-[10px] block">Encrypted Transmission // Recv</span>
                  <h2 className="text-5xl md:text-7xl font-gaming font-black tracking-tighter leading-none text-white">
                    NEXUS <br /><span className="text-zinc-800">INTELLIGENCE</span>
                  </h2>
                </div>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl">
                  심해의 거대한 신경망, 넥서스 지능과의 직접 교신이 가능합니다. 
                  가라앉은 세계의 진실, 오염된 데이터, 그리고 다음 목적지를 분석하십시오.
                </p>
                <div className="flex items-center gap-5 p-4 bg-zinc-950 border border-zinc-900 rounded-sm inline-flex">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900">
                    <Cpu size={20} className="text-cyan-900" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Biometric Sync</p>
                    <p className="text-xs font-mono text-zinc-400">OPERATOR_LOGGED_IN: [SECURE]</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute -inset-1 bg-cyan-950/20 blur-2xl rounded-lg" />
                <NexusAI />
              </div>
            </div>
          </section>

          <section id="media" className="py-40 bg-[#010204]">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
              <h2 className="text-4xl font-gaming font-black tracking-widest uppercase text-white mb-2">
                RECON <span className="text-zinc-800">FOOTAGE</span>
              </h2>
              <div className="w-12 h-1 bg-red-950 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  className="aspect-video bg-zinc-950 border border-zinc-900 overflow-hidden group cursor-pointer relative"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + (i * 10000)}?auto=format&fit=crop&q=80&w=800`} 
                    alt="Gameplay recon" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 font-mono text-[8px] text-zinc-500 uppercase tracking-[0.3em]">
                    Site_{i * 101} // Decrypted
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
