"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Moon, Bookmark, Menu, X, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setUser(data.user);
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          Tech<span className="text-gradient">Career</span> Hub
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium text-gray-300 items-center">
            <Link href="/#roles" className="hover:text-white transition-colors">Career Paths</Link>
            <Link href="/notes" className="hover:text-white transition-colors">Master Notes</Link>
            <Link href="/tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/dsa" className="hover:text-white transition-colors">Master DSA</Link>
            <Link href="/recruiters" className="hover:text-white transition-colors">Top Recruiters</Link>
            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Moon className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center gap-4 ml-2">
                <span className="text-sm font-medium text-blue-400 flex items-center gap-2">
                  <User className="w-4 h-4" /> {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="ml-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-nav border-b border-white/10 py-4 px-6 flex flex-col gap-4"
          >
            <Link href="/#roles" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Career Paths</Link>
            <Link href="/notes" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Master Notes</Link>
            <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">AI Tools</Link>
            <Link href="/dsa" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Master DSA</Link>
            <Link href="/recruiters" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Top Recruiters</Link>
            
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              {user ? (
                <>
                  <div className="text-blue-400 flex items-center gap-2 py-2">
                    <User className="w-4 h-4" /> {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 py-2 text-left"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-center py-3 rounded-xl font-medium transition-colors"
                >
                  Login / Signup
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
