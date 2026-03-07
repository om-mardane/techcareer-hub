"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { careersData } from "@/data/careers";
import { SalaryByLocation } from "@/components/SalaryByLocation";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, TrendingUp, BookOpen, Target, Share2, Briefcase, ChevronRight, Award, ArrowRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Link from "next/link";

export default function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const career = careersData.find(c => c.id === resolvedParams.id);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (!career) return notFound();

  // Extract real historical trend data instead of Mock Data
  const trendData = career.market.historicalTrend || [
    { year: '2020', demand: 60 },
    { year: '2021', demand: 75 },
    { year: '2022', demand: 82 },
    { year: '2023', demand: 86 },
    { year: '2024', demand: 92 },
    { year: '2025', demand: career.market.jobDemand * 10 }
  ];

  return (
    <>
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--primary)] z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <main className="flex-1 pt-32 pb-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 text-sm text-[var(--secondary)] mb-6 font-medium tracking-wide">
              <span>Careers</span> <ChevronRight className="w-4 h-4" /> 
              <span>{career.category}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">{career.title}</h1>
                <p className="text-xl text-gray-400 max-w-2xl">{career.shortDescription}</p>
              </div>
              <button className="flex items-center gap-2 glass-card px-4 py-2 hover:bg-white/10 transition-colors w-fit">
                <Share2 className="w-4 h-4" /> Share Role
              </button>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Avg. Salary (India)</span>
                <span className="text-2xl font-bold neon-text-primary">{career.overview.salary.india}</span>
              </div>
              <div className="glass-card p-6 flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Avg. Salary (Global)</span>
                <span className="text-2xl font-bold neon-text-secondary">{career.overview.salary.worldwide}</span>
              </div>
              <div className="glass-card p-6 flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Market Demand</span>
                <span className="text-2xl font-bold text-[var(--accent)]">{career.market.jobDemand}/10 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Setup two column layout for content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-[var(--primary)]" /> Role Overview
                </h2>
                <div className="glass-card p-8">
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">{career.overview.description}</p>
                  <h3 className="font-semibold text-white mb-4">Daily Responsibilities:</h3>
                  <ul className="space-y-4">
                    {career.overview.dailyTasks.map((task, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <CheckCircle2 className="w-6 h-6 text-[var(--secondary)] shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
              
              {/* Future Demand Chart */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[var(--primary)]" /> Future Demand
                </h2>
                <div className="glass-card p-8 aspect-[16/9] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(15,15,30,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: 'var(--secondary)' }}
                      />
                      <Area type="monotone" dataKey="demand" stroke="var(--secondary)" fillOpacity={1} fill="url(#colorDemand)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.section>

              {/* Salary By Location Matrix */}
              <SalaryByLocation careerId={career.id} />

              {/* Roadmap Timeline */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-[var(--primary)]" /> Complete Roadmap
                </h2>
                <div className="glass-card p-8 relative">
                  <div className="absolute left-10 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent"></div>
                  
                  <div className="space-y-8">
                    {career.roadmap.map((step, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-[3px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[var(--secondary)] shadow-[0_0_10px_rgba(3,218,198,0.8)] z-10"></div>
                        <h4 className="text-xl font-bold">{step.step}</h4>
                        <span className="text-sm font-medium text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full inline-block mt-2">
                          Duration: {step.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              
              {/* Skills Required */}
              <motion.div 
                className="glass-card p-8 sticky top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[var(--secondary)]" /> Required Skills
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.technical.map(skill => (
                      <span key={skill} className="bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1.5 rounded-md text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.soft.map(skill => (
                      <span key={skill} className="bg-white/10 text-gray-300 border border-white/10 px-3 py-1.5 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.tools.map(tool => (
                      <span key={tool} className="bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 px-3 py-1.5 rounded-md text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Top Resources */}
              <motion.div 
                className="glass-card p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[var(--primary)]" /> Top Resources
                </h3>
                
                <ul className="space-y-6">
                  {career.resources.freeCourses.map((course: any, i) => (
                    <li key={i}>
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="block group">
                        {course.thumbnail && (
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3 border border-white/10 group-hover:border-[var(--primary)] transition-colors">
                            <img src={course.thumbnail} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md scale-90 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center justify-between text-gray-300 group-hover:text-white transition-colors">
                          <span className="font-medium line-clamp-1">{course.name} <span className="text-xs ml-2 bg-green-500/20 text-green-400 px-2 py-0.5 rounded align-middle">Free</span></span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-sm text-gray-400 mt-8 mb-4 uppercase tracking-wider">Other Platforms</h4>
                <ul className="space-y-4">
                  {career.resources.paidCourses.map((course, i) => (
                    <li key={i}>
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-gray-300 hover:text-white border-b border-white/10 pb-2 transition-colors">
                        <span>{course.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
          </div>
          
          {/* Related Roles Section */}
          <motion.section 
            className="mt-24 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-400">Discover Related Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careersData
                .filter(c => career.relatedIds.includes(c.id))
                .slice(0, 3)
                .map(related => (
                  <Link key={related.id} href={`/career/${related.id}`}>
                    <div className="glass-card p-6 h-full hover:border-[var(--secondary)] transition-colors group cursor-pointer">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--secondary)] transition-colors">{related.title}</h3>
                      <p className="text-sm text-gray-400">{related.shortDescription}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
}
