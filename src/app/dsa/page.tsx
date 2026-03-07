"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BookOpen, Calendar, Code2, PlayCircle, Target } from "lucide-react";

const dsaRoadmap = [
  {
    title: "1. Setup & Basics (Days 1-3)",
    duration: "3 Days",
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400",
    description: "Before jumping into code, you need tools. We start by installing VS Code, learning basic syntax (if/else, loops) in your language (C++, Java, or Python), and understanding Time Complexity (Big O) - which just means 'how fast does my code run if I give it more work?'.",
    realWorld: "Like buying a notebook and pen before starting school.",
    leetCode: "N/A"
  },
  {
    title: "2. Arrays (Days 4-10)",
    duration: "7 Days",
    color: "from-green-500/20 to-emerald-500/5",
    accent: "text-green-400",
    description: "An Array is just a list of items placed right next to each other in memory. We learn techniques like 'Two Pointers' (looking at start and end) to solve problems fast.",
    realWorld: "A row of lockers in a gym. You know exactly where locker #5 is if you know where locker #1 started.",
    leetCode: "1. Two Sum (#1)\n2. Best Time to Buy/Sell Stock (#121)\n3. Contains Duplicate (#217)\n4. Product of Array Except Self (#238)\n5. Maximum Subarray (#53)\n6. Maximum Product Subarray (#152)\n7. Find Minimum in Rotated Sorted Array (#153)\n8. Search in Rotated Sorted Array (#33)\n9. 3Sum (#15)\n10. Container With Most Water (#11)"
  },
  {
    title: "3. Strings (Days 11-17)",
    duration: "7 Days",
    color: "from-lime-500/20 to-green-500/5",
    accent: "text-lime-400",
    description: "A String is just an array of letters. They are used for text manipulation. The 'Sliding Window' technique is heavily used here to look at small chunks of the word at a time.",
    realWorld: "A pearl necklace where every pearl has a letter painted on it.",
    leetCode: "1. Valid Palindrome (#125)\n2. Valid Anagram (#242)\n3. Longest Substring Without Repeating Characters (#3)\n4. Longest Repeating Character Replacement (#424)\n5. Minimum Window Substring (#76)\n6. Valid Parentheses (#20)\n7. Group Anagrams (#49)\n8. Longest Palindromic Substring (#5)\n9. Palindromic Substrings (#647)\n10. Encode and Decode Strings (#271)"
  },
  {
    title: "4. Hash Maps & Sets (Days 18-22)",
    duration: "5 Days",
    color: "from-purple-500/20 to-fuchsia-500/5",
    accent: "text-purple-400",
    description: "A Hash Map stores data in key-value pairs. You give it a 'key', and it instantly gives you the 'value'. It is super fast for searching if something exists.",
    realWorld: "A real-world dictionary. You don't read the whole book to find 'Zebra'. You jump straight to 'Z' and look for it instantly.",
    leetCode: "1. Ransom Note (#383)\n2. Isomorphic Strings (#205)\n3. Word Pattern (#290)\n4. Valid Anagram (#242)\n5. Group Anagrams (#49)\n6. Two Sum (#1)\n7. Happy Number (#202)\n8. Contains Duplicate II (#219)\n9. Longest Consecutive Sequence (#128)\n10. Insert Delete GetRandom O(1) (#380)"
  },
  {
    title: "5. Stacks & Queues (Days 23-28)",
    duration: "6 Days",
    color: "from-yellow-500/20 to-orange-500/5",
    accent: "text-yellow-400",
    description: "A Stack is 'Last In, First Out'. The last thing you put in is the first thing you take out. A Queue is 'First In, First Out'. The first thing in line gets served first.",
    realWorld: "Stack: A stack of plates at a buffet. You take the one on top. Queue: A line at McDonald's. First person gets their burger first.",
    leetCode: "1. Valid Parentheses (#20)\n2. Min Stack (#155)\n3. Evaluate Reverse Polish Notation (#150)\n4. Generate Parentheses (#22)\n5. Daily Temperatures (#739)\n6. Car Fleet (#853)\n7. Largest Rectangle in Histogram (#84)\n8. Implement Queue using Stacks (#232)\n9. Implement Stack using Queues (#225)\n10. Sliding Window Maximum (#239)"
  },
  {
    title: "6. Sorting & Searching (Days 29-35)",
    duration: "7 Days",
    color: "from-cyan-500/20 to-blue-500/5",
    accent: "text-cyan-400",
    description: "Sorting is arranging data (like smallest to largest). Searching is finding data. Binary Search is the most important concept: dividing the search area in half every step.",
    realWorld: "Binary Search: Guessing a number between 1-100. If you guess 50 and I say 'higher', you instantly eliminate 1-50. You cut the work in half immediately.",
    leetCode: "1. Binary Search (#704)\n2. Search a 2D Matrix (#74)\n3. Koko Eating Bananas (#875)\n4. Find Minimum in Rotated Sorted Array (#153)\n5. Search in Rotated Sorted Array (#33)\n6. Time Based Key-Value Store (#981)\n7. Median of Two Sorted Arrays (#4)\n8. Sort Colors (#75)\n9. Merge Intervals (#56)\n10. Sort an Array (#912)"
  },
  {
    title: "7. Linked Lists (Days 36-42)",
    duration: "7 Days",
    color: "from-pink-500/20 to-rose-500/5",
    accent: "text-pink-400",
    description: "Unlike an array, elements are not next to each other in memory. Instead, each element (node) just holds a physical address pointing to where the next element is.",
    realWorld: "A treasure hunt. Clue #1 doesn't have the treasure, but it tells you exactly where to find Clue #2, which points to Clue #3.",
    leetCode: "1. Reverse Linked List (#206)\n2. Merge Two Sorted Lists (#21)\n3. Reorder List (#143)\n4. Remove Nth Node From End of List (#19)\n5. Copy List with Random Pointer (#138)\n6. Add Two Numbers (#2)\n7. Linked List Cycle (#141)\n8. Find the Duplicate Number (#287)\n9. LRU Cache (#146)\n10. Reverse Nodes in k-Group (#25)"
  },
  {
    title: "8. Trees (Days 43-52)",
    duration: "10 Days",
    color: "from-teal-500/20 to-emerald-500/5",
    accent: "text-teal-400",
    description: "A Tree holds data in a top-down structure with a single 'Root' at the top, which branches down into 'Leaves'. A Binary Tree means each point can only branch into 2 paths max.",
    realWorld: "A family tree. The CEO is at the top, pointing to 3 Managers, who point to ordinary employees at the bottom.",
    leetCode: "1. Invert Binary Tree (#226)\n2. Maximum Depth of Binary Tree (#104)\n3. Diameter of Binary Tree (#543)\n4. Balanced Binary Tree (#110)\n5. Same Tree (#100)\n6. Subtree of Another Tree (#572)\n7. Lowest Common Ancestor (#235)\n8. Binary Tree Level Order Traversal (#102)\n9. Validate Binary Search Tree (#98)\n10. Kth Smallest Element in a BST (#230)"
  },
  {
    title: "9. Heaps / Priority Queues (Days 53-58)",
    duration: "6 Days",
    color: "from-amber-500/20 to-yellow-500/5",
    accent: "text-amber-400",
    description: "A special tree structure used to quickly find the 'Maximum' or 'Minimum' element. The highest priority item is always kept at the very top for instant access.",
    realWorld: "A hospital emergency room waitlist. It doesn't matter who arrived first (like a queue). The person with the most critical injury (highest priority) goes to the front instantly.",
    leetCode: "1. Kth Largest Element in a Stream (#703)\n2. Last Stone Weight (#1046)\n3. K Closest Points to Origin (#973)\n4. Kth Largest Element in an Array (#215)\n5. Task Scheduler (#621)\n6. Design Twitter (#355)\n7. Find Median from Data Stream (#295)\n8. Top K Frequent Elements (#347)\n9. Minimum Cost to Connect Sticks (#1167)\n10. Reorganize String (#767)"
  },
  {
    title: "10. Graphs (Days 59-68)",
    duration: "10 Days",
    color: "from-indigo-500/20 to-blue-500/5",
    accent: "text-indigo-400",
    description: "Like a tree, but any point can connect to any other point, creating a web. We use Breadth-First Search (explore neighbors first) or Depth-First Search (go as deep as possible first).",
    realWorld: "Facebook friends or Google Maps. Cities are points, and roads are the lines connecting them. You use Graphs to find the shortest path from City A to City B.",
    leetCode: "1. Number of Islands (#200)\n2. Max Area of Island (#695)\n3. Clone Graph (#133)\n4. Walls and Gates (#286)\n5. Rotting Oranges (#994)\n6. Pacific Atlantic Water Flow (#417)\n7. Surrounded Regions (#130)\n8. Course Schedule (#207)\n9. Course Schedule II (#210)\n10. Redundant Connection (#684)"
  },
  {
    title: "11. Dynamic Programming (Days 69-80)",
    duration: "12 Days",
    color: "from-red-500/20 to-orange-500/5",
    accent: "text-red-400",
    description: "An advanced technique where you break a massive problem into smaller pieces, solve the small pieces once, and remember the answer so you never calculate it again.",
    realWorld: "If I ask you what 1+1+1+1+1 is, you count 5. If I then add '+1' at the end, you don't recount from the start. You just say 6 because you remembered '5' from before.",
    leetCode: "1. Climbing Stairs (#70)\n2. Min Cost Climbing Stairs (#746)\n3. House Robber (#198)\n4. House Robber II (#213)\n5. Longest Palindromic Substring (#5)\n6. Palindromic Substrings (#647)\n7. Decode Ways (#91)\n8. Coin Change (#322)\n9. Maximum Product Subarray (#152)\n10. Word Break (#139)"
  }
];

export default function DSARoadmap() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master <span className="text-[var(--secondary)] neon-text-secondary">DSA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 space-y-4 text-left">
              <span className="block mb-2"><strong className="text-white">What is DSA?</strong> At its core, Data Structures are just different ways to organize and store data (like putting books on a shelf vs throwing them in a box). Algorithms are the step-by-step instructions used to solve a problem with that data.</span>
              <span className="block mb-2"><strong className="text-white">Why the Industry Hires for it:</strong> Big tech companies don't ask you DSA questions to make you suffer. They use them because optimizing software at a massive scale (like Google or Netflix) requires extremely efficient data handling. Bad code costs millions of dollars in server fees. Good DSA saves money and makes apps lightning-fast.</span>
              <span className="block"><strong className="text-white">Importance for Logic Building:</strong> Learning DSA forces your brain to stop memorizing syntax and start thinking like an engineer. It trains you to break down massive, impossible-looking problems into tiny, logical, programmable steps.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-[var(--primary)]" /> 2-3 Hours Daily
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                <Code2 className="w-4 h-4 text-green-400" /> Java, C++, Python
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                <Target className="w-4 h-4 text-[var(--secondary)]" /> Top LeetCode Patterns
              </span>
            </div>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Connecting Vertical Line for desktop */}
            <div className="hidden md:block absolute left-[31px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-purple-500 opacity-20"></div>

            {dsaRoadmap.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-[15px] top-8 w-8 h-8 rounded-full bg-black border-2 border-[var(--card-border)] items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                  <div className={`w-3 h-3 rounded-full bg-current ${section.accent}`}></div>
                </div>

                <div className={`glass-card p-6 md:p-8 relative overflow-hidden border-t-0 border-l border-r border-b border-white/5 shadow-xl`}>
                  {/* Subtle top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} opacity-80`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h2 className={`text-2xl md:text-3xl font-bold text-white tracking-tight`}>{section.title}</h2>
                    <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
                      Time: {section.duration}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-2">What Is It?</h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/30 rounded-xl p-5 border border-white/5">
                      <h3 className={`text-sm uppercase tracking-wider ${section.accent} font-bold mb-2 flex items-center gap-2`}>
                        <BookOpen className="w-4 h-4" /> Real-World Example
                      </h3>
                      <p className="text-gray-300 italic text-sm leading-relaxed">
                        "{section.realWorld}"
                      </p>
                    </div>

                    <div className="bg-[var(--primary)]/5 rounded-xl p-5 border border-[var(--primary)]/20">
                      <h3 className="text-sm uppercase tracking-wider text-white font-bold mb-2 flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-[var(--secondary)]" /> Top LeetCode Problems
                      </h3>
                      <div className="space-y-1 mt-3">
                        {section.leetCode === "N/A" ? (
                          <p className="text-[var(--secondary)] font-mono text-sm leading-relaxed">N/A</p>
                        ) : (
                          section.leetCode.split("\n").map((problem, i) => (
                            <p key={i} className="text-[var(--secondary)] font-mono text-sm leading-relaxed border-b border-[var(--secondary)]/10 pb-1 mb-1 last:border-0 hover:text-white transition-colors cursor-default">
                              {problem}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
