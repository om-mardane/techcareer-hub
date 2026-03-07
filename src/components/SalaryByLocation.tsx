"use client";

import { useState } from "react";
import { globalSalaries, LocationData, LevelData, SalaryRange } from "@/data/salaries";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe2, Calculator, Info } from "lucide-react";

interface Props {
  careerId: string;
}

const COUNTRIES = [
  { code: "USA", flag: "🇺🇸", name: "United States" },
  { code: "UK", flag: "🇬🇧", name: "United Kingdom" },
  { code: "Canada", flag: "🇨🇦", name: "Canada" },
  { code: "Australia", flag: "🇦🇺", name: "Australia" },
  { code: "Germany", flag: "🇩🇪", name: "Germany" },
  { code: "India", flag: "🇮🇳", name: "India" },
  { code: "Singapore", flag: "🇸🇬", name: "Singapore" },
  { code: "UAE", flag: "🇦🇪", name: "UAE" },
];

const USA_CITIES = ["San Francisco", "New York", "Austin", "Chicago", "Remote"];

export function SalaryByLocation({ careerId }: Props) {
  const [activeCountry, setActiveCountry] = useState("USA");
  const [activeCity, setActiveCity] = useState("National Average");
  const [showPPP, setShowPPP] = useState(false);

  // If we don't have salary data for this particular role yet, safely collapse
  const careerData = globalSalaries[careerId];
  if (!careerData) {
     return (
        <div id="salary-debug" className="p-8 border border-red-500 bg-red-500/10 text-red-500 my-10 font-mono text-sm">
           <b>ERROR</b>: No salary data found for Career ID: "{careerId}".<br/>
           Available keys in globalSalaries: {Object.keys(globalSalaries).join(", ")}
        </div>
     );
  }

  const currentCountryData = careerData[activeCountry];
  
  // Decide which data tier to show
  let displayData: LevelData = currentCountryData.base;
  if (activeCountry === "USA" && activeCity !== "National Average" && currentCountryData.cities) {
    displayData = currentCountryData.cities[activeCity];
  }

  const formatMoney = (val: number, symbol: string) => {
    if (showPPP) {
       // Apply PPP Multiplier to represent purchasing power equivalence in USD
       const pppAdjusted = Math.round(val * (currentCountryData.pppMultiplier || 1));
       return `$${pppAdjusted.toLocaleString('en-US')}`;
    }
    return `${symbol}${val.toLocaleString('en-US')}`;
  };

  const renderBar = (level: string, data: SalaryRange, colorClass: string, isSenior: boolean) => {
     // Create a 5% margin on the right so the max text doesn't slam the wall
     const overallMax = Math.max(displayData.entry.max, displayData.senior.max) * 1.05;
     const leftPercent = (data.min / overallMax) * 100;
     const widthPercent = ((data.max - data.min) / overallMax) * 100;
     const medianPercent = (data.median / overallMax) * 100;

     return (
        <div className="mb-8 relative">
           <div className="flex justify-between items-end mb-3">
             <span className="font-bold text-white tracking-wide uppercase text-sm">{level}</span>
             <div className="text-right">
                <span className="text-xs text-gray-400 block mb-0.5">Median Target</span>
                <span className={`font-mono font-bold text-lg ${isSenior ? "text-[var(--secondary)]" : "text-blue-400"}`}>
                   {formatMoney(data.median, data.symbol)}
                </span>
             </div>
           </div>
           
           <div className="relative h-14 bg-black/50 rounded-xl border border-white/10 overflow-hidden shadow-inner">
              {/* Range Tracking Bar */}
              <motion.div 
                 initial={{ width: 0, left: 0 }}
                 animate={{ width: `${widthPercent}%`, left: `${leftPercent}%` }}
                 transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                 className={`absolute top-0 bottom-0 rounded-xl bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${colorClass}`}
              />
              {/* Outline wrapper for range container */}
              <motion.div 
                 initial={{ width: 0, left: 0 }}
                 animate={{ width: `${widthPercent}%`, left: `${leftPercent}%` }}
                 transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                 className={`absolute top-0 bottom-0 rounded-xl border border-current opacity-50 ${colorClass}`}
              />

              {/* Solid Marker for Median */}
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1, left: `${medianPercent}%` }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className={`absolute top-0 bottom-0 w-1 ${colorClass} shadow-[0_0_15px_currentColor] z-10`}
              >
                  {/* Glowing bulb on top of median line */}
                  <div className={`absolute -top-1 -left-1 w-3 h-3 rounded-full ${colorClass}`} />
              </motion.div>

              {/* Text overlays inside bar (Min) */}
              <div className="absolute left-4 top-0 bottom-0 flex items-center text-xs text-gray-400 font-mono font-medium z-20 pointer-events-none">
                 {formatMoney(data.min, data.symbol)}
              </div>
              {/* Text overlays inside bar (Max) */}
              <div 
                 className="absolute top-0 bottom-0 flex items-center text-xs text-gray-400 font-mono font-medium z-20 transition-all pointer-events-none"
                 style={{ left: `calc(${leftPercent + widthPercent}% + 12px)` }}
              >
                 {formatMoney(data.max, data.symbol)}
              </div>
           </div>
        </div>
     );
  };

  return (
    <section className="mt-16 mb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-[var(--secondary)]" /> Global Salary Insights
          </h2>
          
          <button 
             onClick={() => setShowPPP(!showPPP)}
             className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-lg ${showPPP ? 'bg-[var(--secondary)]/20 border-[var(--secondary)] text-[var(--secondary)] shadow-[0_0_20px_rgba(3,218,198,0.2)]' : 'bg-[#111] border-white/10 text-gray-400 hover:bg-white/5 hover:border-white/20'}`}
          >
             <Calculator className={`w-4 h-4 ${showPPP ? 'animate-pulse' : 'group-hover:text-white transition-colors'}`} /> 
             {showPPP ? "Cost of Living Adjusted (USD)" : "Show Local Currency"}
          </button>
      </div>

      <div className="glass-card p-0 overflow-hidden flex flex-col md:flex-row shadow-[0_0_40px_rgba(0,0,0,0.5)] border-white/10">
         
         {/* Sidebar: Country Selection */}
         <div className="w-full md:w-1/3 bg-black/60 border-r border-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">Select Market</h3>
            <div className="flex gap-2 pb-2 overflow-x-auto md:flex-col md:pb-0 hide-scrollbar">
                {COUNTRIES.map(c => (
                   <button
                     key={c.code}
                     onClick={() => {
                        setActiveCountry(c.code);
                        setActiveCity("National Average");
                        // Slight timeout allows AnimatePresence to exit cleanly before re-rendering
                     }}
                     className={`flex-shrink-0 flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 ${activeCountry === c.code ? 'bg-[var(--primary)]/20 border border-[var(--primary)]/50 text-white shadow-[0_0_25px_rgba(0,255,255,0.15)] scale-[1.02]' : 'bg-white/5 border border-transparent text-gray-400 hover:bg-white/10 hover:text-gray-200'}`}
                   >
                     <span className="text-2xl drop-shadow-md">{c.flag}</span>
                     <span className="font-semibold">{c.name}</span>
                   </button>
                ))}
            </div>
         </div>

         {/* Main Content Area */}
         <div className="w-full md:w-2/3 p-6 lg:p-10 relative bg-[#0a0a0f]/80 backdrop-blur-md">
            <AnimatePresence mode="popLayout">
               <motion.div 
                 key={activeCountry + activeCity + (showPPP ? "ppp" : "local")}
                 initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                 animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                 exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
               >
                  {/* USA Cities Selector */}
                  {activeCountry === "USA" && (
                    <div className="mb-10 p-4 bg-black/40 border border-white/5 rounded-2xl flex flex-wrap gap-2 items-center shadow-inner">
                       <MapPin className="w-4 h-4 text-[var(--primary)]" />
                       <span className="text-sm text-gray-400 mr-2 font-medium">Market Tier:</span>
                       <button 
                           onClick={() => setActiveCity("National Average")}
                           className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${activeCity === "National Average" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"}`}
                       >
                           National Averages
                       </button>
                       {USA_CITIES.map(city => (
                           <button 
                             key={city}
                             onClick={() => setActiveCity(city)}
                             className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${activeCity === city ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"}`}
                           >
                              {city}
                           </button>
                       ))}
                    </div>
                  )}

                  <div className="mb-12 mt-4">
                    {renderBar("Entry-Level (0-2 Yrs)", displayData.entry, "text-[#00d2ff] bg-[#00d2ff]", false)}
                    {renderBar("Senior-Level (5+ Yrs)", displayData.senior, "text-[var(--secondary)] bg-[var(--secondary)]", true)}
                  </div>

                  {/* Notes & Citations */}
                  <div className="bg-blue-900/10 border border-blue-500/20 p-5 rounded-xl flex items-start gap-4 shadow-inner">
                     <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                     <div className="text-sm text-gray-300 leading-relaxed">
                        {currentCountryData.notes && (
                            <p className="mb-2 text-blue-300 font-semibold">{currentCountryData.notes}</p>
                        )}
                        <p className="opacity-80">
                           Data curated securely from verified Level.fyi, Glassdoor, and regional equivalencies (Updated 2025). 
                           {showPPP ? " Values are specifically adjusted for absolute Purchasing Power Parity (PPP), reflecting the true cost of living standard equivalent to USD." : ""}
                        </p>
                     </div>
                  </div>

               </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
}
