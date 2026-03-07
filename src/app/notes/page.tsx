"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BrainCircuit, Cpu, Database, Network } from "lucide-react";

const aiNotes = [
  {
    id: "neural-networks",
    title: "How Neural Networks Work",
    icon: <Network className="w-8 h-8 text-pink-500" />,
    gradient: "from-pink-500/20 to-rose-500/5",
    description: "Neural networks are computational models inspired by the human brain. They consist of layers of interconnected 'nodes' (neurons) that process data.",
    realWorld: "Imagine a group of friends trying to guess if a faraway animal is a dog or a cat. The first person looks at the ears, the second looks at the tail, and the third looks at the size. They all shout their guesses to a leader. The leader takes all their hints and makes the final decision. A neural network works just like this: tiny decision-makers passing clues to the next level until it 'recognizes' what it's looking at."
  },
  {
    id: "llm",
    title: "Large Language Models (LLMs)",
    icon: <BrainCircuit className="w-8 h-8 text-[var(--primary)]" />,
    gradient: "from-[var(--primary)]/20 to-purple-800/5",
    description: "LLMs are advanced neural networks trained on massive amounts of text data to understand and generate human-like language based on statistical probabilities.",
    realWorld: "Think of ChatGPT. When you give it a prompt like 'Write a story about a...' it acts like the 'autocomplete' feature on your phone's keyboard, just millions of times smarter. Because it has 'read' almost everything on the internet, it's just really, really good at guessing what the next word should be, over and over again, until it forms a perfect sentence."
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    icon: <Database className="w-8 h-8 text-[var(--secondary)]" />,
    gradient: "from-[var(--secondary)]/20 to-teal-800/5",
    description: "RAG is a technique that gives LLMs access to specific, up-to-date information by combining a search retrieval step with the text generation step.",
    realWorld: "Imagine asking a smart student a question. If they don't know it, they might guess (or make something up!). But what if you give them an open-book test? RAG is exactly that. Before the AI answers your question, it first goes and reads a specific rulebook or document you gave it, finds the exact right page, and then reads that page to you so it never gives a wrong answer."
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    icon: <Cpu className="w-8 h-8 text-yellow-500" />,
    gradient: "from-yellow-500/20 to-orange-500/5",
    description: "AI Agents are systems powered by an LLM that can think recursively, make decisions, use tools (like searching the web or running code), and take autonomous actions to achieve a goal.",
    realWorld: "If a normal AI is just a brain that talks to you, an AI Agent is that same brain given a pair of hands. If you tell an AI, 'I need to fly to New York,' it just tells you how to book a flight. But if you tell an AI Agent, it will actually open the web browser, look for the cheapest tickets, fill out your name, and buy the ticket for you all by itself."
  }
];

export default function MasterNotes() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[800px] h-[800px] bg-[var(--secondary)]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master <span className="text-[var(--primary)] neon-text-primary">Notes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deep dive into complex concepts broken down with simple, real-world examples.
            </p>
          </motion.div>

          <div className="space-y-8">
            {aiNotes.map((note, idx) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`glass-card p-6 md:p-10 border-l-4 border-l-[var(--primary)] relative overflow-hidden group hover:border-l-[var(--secondary)] transition-colors`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${note.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-lg">
                      {note.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{note.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-[var(--primary)] font-semibold mb-3">Technical Definition</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {note.description}
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 relative">
                      <h3 className="text-sm uppercase tracking-widest text-[var(--secondary)] font-semibold mb-3">Real-World Example</h3>
                      <p className="text-gray-200 leading-relaxed italic">
                        "{note.realWorld}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer repeated simply for continuity */}
      <footer className="border-t border-white/10 bg-black/60 py-12 px-6 mt-auto">
        <div className="container mx-auto text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} TechCareer Hub. Created by Om Mardane.</p>
        </div>
      </footer>
    </>
  );
}
