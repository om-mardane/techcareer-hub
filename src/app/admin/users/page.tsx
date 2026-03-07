"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail, Clock, Database, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.users) {
          setUsers(data.users);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black/95 text-white p-8 font-sans pt-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12 border-b border-white/10 pb-6"
        >
          <div>
            <h1 className="text-4xl font-bold flex items-center tracking-tight mb-2">
              <Database className="w-8 h-8 mr-4 text-purple-400" />
              Database Overview
            </h1>
            <p className="text-gray-400 pl-12 text-sm">Showing live records from dev.db</p>
          </div>

          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center space-x-4 backdrop-blur-md">
            <Users className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Total Users</p>
              <p className="text-2xl font-bold">{users.length}</p>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <Users className="w-12 h-12 text-gray-500 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-gray-300">No users found</h3>
            <p className="text-gray-500 mt-2 text-sm">When users sign up, they will appear here automatically.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all hover:border-purple-500/30 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-purple-500/20 text-purple-300 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono bg-black/50 px-2 py-1 rounded">
                    ID: {user.id.slice(0, 8)}...
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
                
                <div className="flex items-center text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 mr-2 opacity-70" />
                  {user.email}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5 mr-2 opacity-70" />
                  Joined {new Date(user.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
