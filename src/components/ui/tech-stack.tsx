"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonStyles, cardStyles, containerVariants, itemVariants } from "@/lib/styles";

export function TechStack() {
  const [codeContent, setCodeContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const code = `const techStack = {
  frontend: {
    "Next.js": { level: "Expert", exp: "5 years" },
    "React": { level: "Expert", exp: "8 years" },
    "TypeScript": { level: "Expert", exp: "7 years" },
    "Tailwind": { level: "Expert", exp: "4 years" }
  },
  
  backend: {
    "Node.js": { level: "Expert", exp: "10 years" },
    "Python": { level: "Expert", exp: "12 years" },
    "PostgreSQL": { level: "Expert", exp: "10 years" }
  },
  
  devops: {
    "Docker": { level: "Expert", exp: "6 years" },
    "AWS": { level: "Expert", exp: "8 years" },
    "Git": { level: "Expert", exp: "12 years" }
  }
}`;

  const highlightCode = (code: string) => {
    return code
      .replace(/(const|let|var)\s+(\w+)/g, '<span class="text-blue-400">$1</span> <span class="text-yellow-400">$2</span>')
      .replace(/({|})/g, '<span class="text-zinc-400">$1</span>')
      .replace(/"([^"]+)":/g, '<span class="text-green-400">"$1"</span>:')
      .replace(/:\s*"([^"]+)"/g, ': <span class="text-orange-400">"$1"</span>')
      .replace(/(\w+):/g, '<span class="text-blue-300">$1</span>:');
  };

  useEffect(() => {
    if (!isTyping) return;

    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < code.length) {
        currentText += code[currentIndex];
        setCodeContent(currentText);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15); // Even faster typing speed

    return () => clearInterval(interval);
  }, [isTyping, code]);

  return (
    <motion.div
      className="w-full relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full flex flex-col items-center px-8 lg:px-16">
        {/* Main Content Section */}
        <div className="max-w-3xl mb-16 text-center">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-6 items-center"
          >
            <motion.p
              className="text-xl text-zinc-300 leading-relaxed text-center"
              variants={itemVariants}
            >
              With over 12 years of experience in full-stack development, I specialize in building high-performance web applications using modern technologies. My expertise spans frontend development with React and Next.js, backend systems with Node.js and Python, and cloud infrastructure with AWS and Docker.
            </motion.p>
            <motion.p
              className="text-xl text-zinc-300 leading-relaxed text-center"
              variants={itemVariants}
            >
              I prioritize code quality, type safety, and maintainable architecture while delivering scalable solutions that drive business value.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-2"
            >
              <Link href="/tech-stack" className="group">
                <motion.div
                  className={buttonStyles.secondary}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-300">View detailed experience</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* IDE Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block mx-auto w-[800px] xl:w-[1000px] relative"
        >
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-zinc-950 z-10" />
          <motion.div
            className={`${cardStyles.glass} font-mono text-sm overflow-hidden shadow-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Window Header */}
            <motion.div 
              className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500/80"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
              </div>
              <div className="text-zinc-400 text-sm font-mono">VS Code - leehindle.dev</div>
              <div className="w-16" />
            </motion.div>

            {/* Toolbar */}
            <motion.div
              className="bg-zinc-900/50 px-4 py-1.5 flex items-center gap-4 text-xs text-zinc-400 border-b border-zinc-800"
              variants={itemVariants}
            >
              <span className="hover:text-zinc-200 cursor-pointer">File</span>
              <span className="hover:text-zinc-200 cursor-pointer">Edit</span>
              <span className="hover:text-zinc-200 cursor-pointer">View</span>
              <span className="hover:text-zinc-200 cursor-pointer">Go</span>
              <span className="hover:text-zinc-200 cursor-pointer">Run</span>
              <span className="hover:text-zinc-200 cursor-pointer">Terminal</span>
              <span className="hover:text-zinc-200 cursor-pointer">Help</span>
            </motion.div>

            <div className="flex">
              {/* File Explorer */}
              <motion.div
                className="w-48 bg-zinc-900/30 border-r border-zinc-800 flex flex-col"
                variants={itemVariants}
              >
                <div className="p-2 text-xs text-zinc-400 border-b border-zinc-800">EXPLORER</div>
                <div className="p-2">
                  <div className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer mb-2">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>src</span>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer mb-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span>components</span>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <span className="text-blue-400">⦿</span>
                        <span>tech-stack.ts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Editor Area */}
              <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <motion.div
                  className="bg-zinc-900/50 border-b border-zinc-800 flex items-center"
                  variants={itemVariants}
                >
                  <div className="flex items-center px-4 py-1.5 bg-zinc-900 border-r border-zinc-800 gap-2 text-xs">
                    <span className="text-blue-400">⦿</span>
                    <span className="text-zinc-200">tech-stack.ts</span>
                    <span className="ml-2 text-zinc-500 hover:text-zinc-300 cursor-pointer">×</span>
                  </div>
                </motion.div>

                {/* Editor Content */}
                <motion.div 
                  className="flex-1 bg-zinc-950 p-4"
                  variants={itemVariants}
                >
                  <div className="h-[440px] font-mono text-sm relative">
                    {/* Line Numbers */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 text-right pr-4 text-zinc-600 select-none">
                      {Array.from({ length: code.split('\n').length }).map((_, i) => (
                        <div key={i + 1}>{i + 1}</div>
                      ))}
                    </div>
                    {/* Code Content */}
                    <pre 
                      className="text-zinc-100 whitespace-pre pl-12"
                      dangerouslySetInnerHTML={{ 
                        __html: highlightCode(codeContent) + (isTyping ? '<span class="animate-pulse">|</span>' : '') 
                      }}
                    />
                  </div>
                </motion.div>

                {/* Status Bar */}
                <motion.div 
                  className="bg-zinc-900 px-4 py-1.5 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>TypeScript</span>
                    </div>
                    <span>UTF-8</span>
                    <span>LF</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Ln 1, Col 1</span>
                    <span>Spaces: 2</span>
                    <span>🔔 0</span>
                    <span>⚠️ 0</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
} 