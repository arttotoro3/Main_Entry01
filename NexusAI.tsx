
import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Cpu, Database, AlertCircle } from 'lucide-react';
import { getLoreResponse } from '../services/geminiService';
import { Message } from '../types';

const NexusAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'CONNECTION ESTABLISHED. SYSTEM RECOVERY COMPLETE. [STATUS: DEGRADED]. 질문을 입력하십시오, 오퍼레이터.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(!!process.env.API_KEY);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getLoreResponse(input);
    const modelMsg: Message = { role: 'model', text: response || 'NO SIGNAL. RECONNECTING...' };
    
    setMessages(prev => [...prev, modelMsg]);
    setLoading(false);
  };

  return (
    <div className="w-full bg-black/90 border border-zinc-800 rounded-sm overflow-hidden flex flex-col h-[550px] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      
      <div className="bg-zinc-900/50 p-4 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-zinc-600" />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-500">
            Nexus OS // {isLive ? "Live_Sync" : "Archive_Mode"}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-cyan-500 animate-pulse' : 'bg-orange-800'}`} />
            <span className="text-[8px] font-mono text-zinc-700 uppercase">{isLive ? "Node_Live" : "Local_Buffer"}</span>
          </div>
          <Cpu size={14} className="text-zinc-700" />
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth bg-[#030303]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] relative ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-4 rounded-sm text-sm leading-relaxed ${
                m.role === 'user' 
                ? 'bg-zinc-900 text-zinc-200 border-r-4 border-zinc-700 shadow-[4px_0_0_rgba(30,41,59,0.5)]' 
                : 'bg-black text-cyan-800/90 font-mono border-l-4 border-cyan-950 shadow-[-4px_0_10px_rgba(8,51,68,0.2)]'
              }`}>
                {m.role === 'model' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Database size={10} className="text-cyan-950" />
                    <span className="text-[8px] uppercase tracking-widest text-cyan-950">Nexus_Neural_Link >></span>
                  </div>
                )}
                {m.text}
              </div>
              <div className="mt-1 text-[8px] font-mono text-zinc-800 uppercase tracking-tighter">
                {m.role === 'user' ? 'Operator_Input' : 'Nexus_Response_Stored'}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-black p-4 border-l-4 border-zinc-900 flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-950 animate-ping rounded-full" />
              <span className="text-[10px] font-mono text-zinc-700 italic uppercase">Accessing Deep_Storage...</span>
            </div>
          </div>
        )}
      </div>

      {!isLive && messages.length === 1 && (
        <div className="px-8 py-2 bg-orange-950/20 flex items-center gap-2">
          <AlertCircle size={10} className="text-orange-900" />
          <span className="text-[8px] font-mono text-orange-900/60 uppercase">Warning: Restricted Access Mode. Artificial intelligence running on local lore heuristics.</span>
        </div>
      )}

      <div className="p-6 bg-zinc-950/80 border-t border-zinc-900">
        <div className="relative flex items-center group">
          <div className="absolute left-4 text-zinc-700 group-focus-within:text-cyan-900 transition-colors">
             <span className="text-xs font-mono">{'>'}</span>
          </div>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ACCESS LOGS / ASK ARCHIVE..."
            className="w-full bg-black border border-zinc-900 py-4 pl-10 pr-14 text-xs font-mono focus:border-cyan-950 focus:ring-1 focus:ring-cyan-950 outline-none text-zinc-400 placeholder:text-zinc-800"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-3 w-8 h-8 flex items-center justify-center text-zinc-700 hover:text-cyan-700 transition-colors disabled:opacity-20"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NexusAI;
