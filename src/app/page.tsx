"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Code, Terminal, Database, Shield, Smartphone, BrainCircuit, Cloud, Layers, LayoutTemplate, Server, X, CreditCard, Lock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { careersData, allCategories } from "@/data/careers";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  LayoutTemplate,
  Server,
  Layers,
  DatabaseZ: Database,
  ShieldCheck: Shield,
  Smartphone,
  BrainCircuit,
  Cloud
};

// Pre-compute stable particle positions (avoids hydration mismatch from Math.random in JSX)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  // Use deterministic values based on index so server + client match
  xPct: ((i * 47 + 13) % 100),
  yPct: ((i * 31 + 7) % 100),
  opacity: 0.3 + (i % 5) * 0.1,
  duration: 10 + (i % 5) * 4,
  rise: -80 - (i % 4) * 40,
}));

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCareers = activeCategory === "All" 
    ? careersData 
    : careersData.filter(c => c.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-24">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
          {/* Animated background particles (simplified pure CSS representation for now) */}
          {mounted && (
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-2 h-2 rounded-full bg-[var(--primary)]"
                  style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }}
                  initial={{ opacity: p.opacity }}
                  animate={{ 
                    y: [0, p.rise],
                    opacity: [p.opacity, 0]
                  }}
                  transition={{ 
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          )}

          <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Find Your Path in <br className="hidden md:block" />
                <span className="text-gradient">Software Engineering</span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Explore detailed roadmaps, salary insights, and required skills for the most in-demand tech roles. Build a career you love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#roles" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 neon-box-primary"
              >
                <span className="relative z-10">Explore Careers</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* --- CAREERS GRID SECTION --- */}
        <section id="roles" className="py-24 px-6 relative z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore <span className="text-[var(--secondary)] neon-text-secondary">Roles</span></h2>
                <p className="text-gray-400">Discover what it takes to succeed in these specialized domains.</p>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat 
                      ? "bg-[var(--secondary)] text-black shadow-[0_0_15px_rgba(3,218,198,0.4)]" 
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              {filteredCareers.map((career, index) => {
                const Icon: any = iconMap[career.icon] || Code;
                return (
                  <motion.div
                    key={career.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                  >
                    <Link href={`/career/${career.id}`} className="block h-full block">
                      <div className="glass-card p-6 h-full flex flex-col group neon-box-hover cursor-pointer relative overflow-hidden">
                        {/* Subtle background glow effect on hover */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{career.title}</h3>
                        <p className="text-sm text-gray-400 mb-6 flex-1">{career.shortDescription}</p>
                        
                        <div className="mt-auto flex items-center justify-between text-sm font-medium">
                          <span className="text-[var(--secondary)]">{career.category}</span>
                          <span className="text-white/50 flex items-center gap-1 group-hover:text-white transition-colors">
                            View Path <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- PAYMENT / PREMIUM SECTION --- */}
      <section id="payment" className="py-24 px-6 relative z-10 bg-[var(--primary)]/5 border-y border-[var(--primary)]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-12 relative overflow-hidden flex flex-col items-center"
          >
            <div className="absolute top-0 left-0 p-8 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 p-8 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[var(--primary)] to-purple-500 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,255,0.3)] relative z-10">
              <Lock className="w-10 h-10 text-black" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Premium <span className="text-[var(--primary)] neon-text-primary">Payment</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed relative z-10">
              If you want our exclusive content, subscribe to our premium tier today to unlock advanced roadmaps and 1-on-1 mentorship.
            </p>
            
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="group relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
            >
              <CreditCard className="w-6 h-6" />
              <span>Subscribe</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- PAYMENT MODAL --- */}
      <AnimatePresence>
        {isPaymentModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsPaymentModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#111] border border-[var(--primary)]/30 p-8 rounded-3xl max-w-md w-full relative overflow-hidden glass-card shadow-[0_0_50px_rgba(0,255,255,0.15)] flex flex-col items-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Complete Subscription</h3>
              <p className="text-gray-400 mb-8">Scan this perfectly cropped scanner using any UPI app to unlock your access.</p>
              
              {/* Perfectly cropped QR Code containing the exact UPI ID from the user screenshot */}
              <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=7757946957@ibl&pn=TechCareer%20Hub" 
                  alt="Payment Scanner" 
                  className="w-64 h-64 object-contain rounded-lg pointer-events-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[var(--secondary)] bg-[var(--secondary)]/10 px-4 py-2 rounded-full text-sm font-medium border border-[var(--secondary)]/20">
                <Shield className="w-4 h-4" /> Secure UPI via @ibl
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-24 px-6 relative z-10 bg-black/40 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-[var(--primary)] neon-text-primary">Us</span></h2>
            <div className="glass-card p-8 md:p-12 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  TechCareer Hub was created with a singular vision: to demystify the complex world of software engineering and provide clear, actionable, and modern pathways for aspiring developers. Whether you're interested in front-end design, backend systems, or artificial intelligence, our goal is to help you find your perfect fit in the tech ecosystem.
                </p>
                
                <div className="flex flex-col md:flex-row items-center gap-6 mt-12 pt-8 border-t border-white/10 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-black font-bold text-2xl">
                      OM
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Om Mardane</h3>
                      <p className="text-[var(--secondary)] font-medium">Founder & Creator</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <a href="tel:+917757946957" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors bg-white/5 py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md border border-white/5">
                      <Smartphone className="w-5 h-5 text-[var(--accent)]" />
                      <span className="font-mono tracking-wider">+91 77579 46957</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-black/60 py-12 px-6 mt-auto">
        <div className="container mx-auto text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} TechCareer Hub. Created by Om Mardane.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
