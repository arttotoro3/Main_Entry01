
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen bg-[#010204] text-zinc-400 selection:bg-cyan-950/40 selection:text-cyan-200 antialiased">
      <Header isScrolled={isScrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          
          <StorySection />
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-900/50 to-transparent" />
          
          <Features />
          
          {/* Interactive Nexus Section */}
          <section id="nexus" className="py-40 px-6 relative overflow-hidden bg-black">
             <div className="absolute inset-0 bg-cyan-950/5 mix-blend-overlay" />
             <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-cyan-900 font-mono tracking-[0.6em] uppercase text-[10px] block">Transmission // Incoming_Data</span>
                  <h2 className="text-5xl md:text-7xl font-gaming font-black tracking-tighter leading-none text-white">
                    NEXUS <br /><span className="text-zinc-800">INTELLIGENCE</span>
                  </h2>
                </div>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl">
                  넥서스 지능은 가라앉은 세계의 살아있는 역사입니다. 
                  당신의 장비와 동기화하여 고대 데이터를 해독하고 다음 목표를 설정하십시오.
                </p>
                <div className="inline-flex items-center gap-5 p-4 bg-zinc-950/50 border border-zinc-900 rounded-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800">
                    <div className="w-2 h-2 bg-cyan-700 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Neural Sync Status</p>
                    <p className="text-xs font-mono text-cyan-900 font-bold uppercase tracking-tight">OPERATOR_ID: SECURE_ALPHA</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full relative"
              >
                <div className="absolute -inset-1 bg-cyan-950/10 blur-3xl rounded-lg" />
                <NexusAI />
              </motion.div>
            </div>
          </section>

          {/* Media Section */}
          <section id="media" className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
              <span className="text-zinc-800 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">Visual Recon Logs</span>
              <h2 className="text-4xl font-gaming font-black tracking-widest uppercase text-white mb-2">
                RECON <span className="text-zinc-900">FOOTAGE</span>
              </h2>
              <div className="w-20 h-0.5 bg-red-950/50 mx-auto mt-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="aspect-video bg-zinc-950 border border-zinc-900 overflow-hidden group cursor-pointer relative"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + (i * 12345)}?auto=format&fit=crop&q=80&w=800`} 
                    alt={`Site Recon ${i}`} 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 font-mono text-[8px] text-zinc-600 uppercase tracking-[0.3em]">
                    ZONE_ARCHIVE_{i * 101} // [DECRYPTED]
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
