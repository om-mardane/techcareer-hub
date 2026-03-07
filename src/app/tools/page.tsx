"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Wrench, Edit3, Image as ImageIcon, Video, Code, Mic, Bot, Search } from "lucide-react";

const aiTools = [
  // CATEGORY: Everyday Assistants/Chatbots
  {
    name: "ChatGPT",
    category: "Chatbot & Writing",
    icon: <Bot className="w-6 h-6 text-green-400" />,
    useCase: "General Assistant, Writing, Coding, Learning.",
    howToUse: "Ask it questions like a tutor, have it draft emails, summarize long articles, or explain complex topics simply."
  },
  {
    name: "Claude",
    category: "Chatbot & Writing",
    icon: <Bot className="w-6 h-6 text-orange-400" />,
    useCase: "Long-form Writing, Document Analysis, Nuanced Conversation.",
    howToUse: "Upload a long PDF report and ask it to find specific data, or use it to write highly creative, natural-sounding essays."
  },
  {
    name: "Perplexity AI",
    category: "Search Engine",
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    useCase: "Web Searching with Citations.",
    howToUse: "Use it instead of Google. Ask 'What are the current tech trends?' and it will search the web, read articles, and give you a summarized answer with direct links to the sources."
  },
  // CATEGORY: Productivity & Writing
  {
    name: "Notion AI",
    category: "Productivity",
    icon: <Edit3 className="w-6 h-6 text-gray-200" />,
    useCase: "Note-taking, Brainstorming, Action Items.",
    howToUse: "Take meeting notes and ask the AI to automatically pull out the 'To-Do' list and assign tasks to teammates."
  },
  {
    name: "GrammarlyGO",
    category: "Writing",
    icon: <Edit3 className="w-6 h-6 text-emerald-400" />,
    useCase: "Email drafting, Tone adjustment, Grammar correction.",
    howToUse: "Highlight a text message or email and ask it to 'Make it sound more professional' or 'Make it shorter'."
  },
  {
    name: "QuillBot",
    category: "Writing",
    icon: <Edit3 className="w-6 h-6 text-green-500" />,
    useCase: "Paraphrasing and Rewriting.",
    howToUse: "Paste a clunky sentence you wrote, and it will give you 5 smoother, better ways to say the exact same thing."
  },
  // CATEGORY: Audio & Video
  {
    name: "ElevenLabs",
    category: "Audio/Voice",
    icon: <Mic className="w-6 h-6 text-black" />,
    useCase: "Realistic Text-to-Speech & Voice Cloning.",
    howToUse: "Type a script and have it read aloud in a hyper-realistic human voice for a YouTube video or podcast."
  },
  {
    name: "Descript",
    category: "Video/Podcast",
    icon: <Video className="w-6 h-6 text-blue-500" />,
    useCase: "Video and Audio Editing like a Word Doc.",
    howToUse: "Upload a video. It creates a text transcript. If you delete a word in the text (like an 'um' or 'uh'), it automatically deletes that part of the video!"
  },
  {
    name: "HeyGen",
    category: "Video Generation",
    icon: <Video className="w-6 h-6 text-purple-400" />,
    useCase: "Creating AI Avatars for videos.",
    howToUse: "Select a digital human avatar, type a script, and the AI generates a video of the avatar speaking your script with perfect lip-syncing for presentations."
  },
  {
    name: "Suno AI",
    category: "Audio/Music",
    icon: <Mic className="w-6 h-6 text-pink-400" />,
    useCase: "Generating full songs with vocals and music.",
    howToUse: "Type a prompt like 'A pop song about coding bugs in the rain' and it will instantly create a 2-minute original song with generated lyrics and a singer."
  },
  // CATEGORY: Image & Design
  {
    name: "Midjourney",
    category: "Image Generation",
    icon: <ImageIcon className="w-6 h-6 text-white" />,
    useCase: "High-quality, cinematic image generation.",
    howToUse: "Go into Discord and type '/imagine a futuristic city at sunset in cyberpunk style' and get 4 beautiful images in seconds."
  },
  {
    name: "DALL-E 3",
    category: "Image Generation",
    icon: <ImageIcon className="w-6 h-6 text-yellow-300" />,
    useCase: "Generating images directly within ChatGPT.",
    howToUse: "While chatting in ChatGPT, simply ask 'Draw me a picture of a cat riding a skateboard' and it renders it perfectly following your text."
  },
  {
    name: "Canva Magic Studio",
    category: "Design",
    icon: <Edit3 className="w-6 h-6 text-cyan-400" />,
    useCase: "Quick social media posts, presentations, and photo editing.",
    howToUse: "Upload a photo and use 'Magic Eraser' to instantly remove people in the background, or type 'Make a flyer for a bake sale' and get a full design instantly."
  },
  {
    name: "Leonardo AI",
    category: "Image Generation",
    icon: <ImageIcon className="w-6 h-6 text-orange-500" />,
    useCase: "Game assets, textures, and stylized art.",
    howToUse: "Use it to generate consistent character portraits or game environment backgrounds using their customized image models."
  },
  // CATEGORY: Coding & Productivity
  {
    name: "GitHub Copilot",
    category: "Coding",
    icon: <Code className="w-6 h-6 text-gray-300" />,
    useCase: "AI pair programming.",
    howToUse: "While typing code in VS Code, write a comment like '// function to sort array alphabetically' and it will instantly write the code for you."
  },
  {
    name: "Cursor",
    category: "Coding",
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    useCase: "AI-first Code Editor.",
    howToUse: "Highlight a chunk of broken code and press Cmd+K, then type 'fix this bug' and it rewrites the file to fix the error."
  },
  {
    name: "Gamma",
    category: "Presentations",
    icon: <Wrench className="w-6 h-6 text-pink-500" />,
    useCase: "Creating slide decks from text.",
    howToUse: "Type a topic like 'The History of Rome' and it instantly generates a fully formatted, 10-slide presentation complete with text, bullet points, and images."
  },
  {
    name: "Otter.ai",
    category: "Meetings",
    icon: <Mic className="w-6 h-6 text-blue-300" />,
    useCase: "Meeting transcription and summaries.",
    howToUse: "Invite the Otter bot to your Zoom meeting. It will listen to everyone talking, write down everything said, and email you a summary of the decisions made."
  },
  {
    name: "Phind",
    category: "Coding Search",
    icon: <Search className="w-6 h-6 text-purple-300" />,
    useCase: "A search engine specifically for developers.",
    howToUse: "Ask it specialized programming questions like 'How do I center a div using Tailwind CSS?' and it gives you extreme, code-specific answers with links to docs."
  },
  {
    name: "Beautiful.ai",
    category: "Presentations",
    icon: <Wrench className="w-6 h-6 text-teal-400" />,
    useCase: "Smart slide design.",
    howToUse: "Add text to a slide and it automatically snaps your text, charts, and images into a mathematically perfect, visually pleasing layout without you playing with boxes."
  }
];

export default function AITools() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -ml-[400px] -mt-64 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Top 20 <span className="text-[var(--primary)] neon-text-primary">AI Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              You don't need a computer science degree to use artificial intelligence. Here are the top 20 AI tools you can use right now to work faster, create art, and simplify your daily life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {aiTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 10) * 0.1 }}
                className="glass-card p-6 border border-white/5 hover:border-[var(--secondary)]/50 transition-colors group relative overflow-hidden"
              >
                {/* Hover gradient bleed */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)]/0 via-[var(--secondary)]/10 to-[var(--primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg">
                        {tool.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-wide">{tool.name}</h2>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[var(--secondary)] border border-white/5">
                      {tool.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-1">What It Does</h3>
                      <p className="text-gray-200">{tool.useCase}</p>
                    </div>
                    
                    <div className="bg-black/30 rounded-lg p-4 border border-white/5 line-clamp-3 group-hover:line-clamp-none transition-all">
                      <h3 className="text-sm uppercase tracking-wider text-[var(--primary)] font-bold mb-1">How To Use It (Real Example)</h3>
                      <p className="text-gray-300 italic text-sm leading-relaxed">"{tool.howToUse}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-12 px-6 mt-auto">
        <div className="container mx-auto text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} TechCareer Hub. Created by Om Mardane.</p>
        </div>
      </footer>
    </>
  );
}
