"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Building2, Rocket, Briefcase } from "lucide-react";
import { useState } from "react";

const productCompanies = [
  { name: "Google", domain: "google.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Apple", domain: "apple.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "Netflix", domain: "netflix.com" },
  { name: "Uber", domain: "uber.com" },
  { name: "Airbnb", domain: "airbnb.com" },
  { name: "Adobe", domain: "adobe.com" },
  { name: "Atlassian", domain: "atlassian.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Spotify", domain: "spotify.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "LinkedIn", domain: "linkedin.com" },
  { name: "X", domain: "x.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Tesla", domain: "tesla.com" },
  { name: "Intuit", domain: "intuit.com" },
  { name: "PayPal", domain: "paypal.com" }
];

const serviceCompanies = [
  { name: "TCS", domain: "tcs.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "HCLTech", domain: "hcltech.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "PwC", domain: "pwc.com" },
  { name: "EY", domain: "ey.com" },
  { name: "KPMG", domain: "kpmg.com" },
  { name: "LTIMindtree", domain: "ltimindtree.com" },
  { name: "Mphasis", domain: "mphasis.com" },
  { name: "L&T Tech", domain: "ltts.com" },
  { name: "Hexaware", domain: "hexaware.com" },
  { name: "NTT DATA", domain: "nttdata.com" },
  { name: "DXC Technology", domain: "dxc.com" },
  { name: "EPAM Systems", domain: "epam.com" }
];

const startupCompanies = [
  { name: "OpenAI", domain: "openai.com" },
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "Discord", domain: "discord.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Supabase", domain: "supabase.com" },
  { name: "Postman", domain: "postman.com" },
  { name: "Razorpay", domain: "razorpay.com" },
  { name: "CRED", domain: "cred.club" },
  { name: "Zomato", domain: "zomato.com" },
  { name: "Swiggy", domain: "swiggy.com" },
  { name: "Zepto", domain: "zeptonow.com" },
  { name: "Plaid", domain: "plaid.com" },
  { name: "Databricks", domain: "databricks.com" },
  { name: "Hugging Face", domain: "huggingface.co" },
  { name: "Canva", domain: "canva.com" },
  { name: "Robinhood", domain: "robinhood.com" },
  { name: "Snowflake", domain: "snowflake.com" },
  { name: "Perplexity", domain: "perplexity.ai" }
];

export default function TopRecruiters() {
  const [activeTab, setActiveTab] = useState('product');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 -mt-32 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 mb-32 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Top <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[var(--primary)] neon-text-primary">Recruiters</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the top 60 companies actively hiring software engineers worldwide. From massive tech giants to fast-growing startups.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('product')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'product' ? 'bg-[var(--primary)] text-black shadow-[0_0_20px_rgba(0,255,255,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <Briefcase className="w-4 h-4" /> Product Based
            </button>
            <button 
              onClick={() => setActiveTab('service')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'service' ? 'bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <Building2 className="w-4 h-4" /> Service Based
            </button>
            <button 
              onClick={() => setActiveTab('startup')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'startup' ? 'bg-[var(--secondary)] text-black shadow-[0_0_20px_rgba(3,218,198,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <Rocket className="w-4 h-4" /> Startups & Unicorns
            </button>
          </div>

          {/* Grid Content */}
          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {(activeTab === 'product' ? productCompanies : activeTab === 'service' ? serviceCompanies : startupCompanies).map((company) => (
              <motion.div
                key={company.domain}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`glass-card p-6 flex flex-col items-center justify-center gap-4 border border-white/5 relative overflow-hidden group cursor-pointer ${
                  activeTab === 'product' ? 'hover:border-[var(--primary)]/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]' : 
                  activeTab === 'service' ? 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 
                  'hover:border-[var(--secondary)]/50 hover:shadow-[0_0_30px_rgba(3,218,198,0.15)]'
                }`}
              >
                {/* Glow behind the logo */}
                <div className={`absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  activeTab === 'product' ? 'bg-[var(--primary)]' : 
                  activeTab === 'service' ? 'bg-purple-500' : 
                  'bg-[var(--secondary)]'
                }`}></div>

                <div className="w-16 h-16 relative z-10 bg-white/5 flex items-center justify-center rounded-2xl p-3 border border-white/10 group-hover:bg-white transition-colors duration-300 overflow-hidden">
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=www.${company.domain}&sz=128`} 
                    alt={company.name}
                    className="w-full h-full object-contain filter group-hover:brightness-100 brightness-90 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('fallback-icon');
                    }}
                  />
                  <style jsx>{`
                    .fallback-icon::after {
                      content: "${company.name.charAt(0)}";
                      color: #fff;
                      font-size: 1.5rem;
                      font-weight: bold;
                    }
                    .glass-card:hover .fallback-icon::after {
                      color: #000;
                    }
                  `}</style>
                </div>
                
                <h3 className="font-bold text-sm md:text-base text-gray-300 group-hover:text-white text-center transition-colors relative z-10 w-full truncate px-2">
                  {company.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </main>
      
      <footer className="border-t border-white/10 bg-black/60 py-12 px-6 mt-16">
        <div className="container mx-auto text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} TechCareer Hub. Created by Om Mardane.</p>
        </div>
      </footer>
    </>
  );
}
