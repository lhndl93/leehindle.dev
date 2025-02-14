"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { useIsomorphicLayoutEffect } from "@/lib/hooks";

// Terminal commands with outputs
const terminalCommands = [
  {
    command: 'git status',
    outputs: [
      'On branch main',
      'Your branch is up to date with \'origin/main\'',
      '',
      'Changes not staged for commit:',
      '  (use "git add <file>..." to update what will be committed)',
      '  modified:   src/components/animated-content.tsx',
      '',
      'no changes added to commit'
    ]
  },
  {
    command: 'git diff',
    outputs: [
      'diff --git a/src/components/animated-content.tsx b/src/components/animated-content.tsx',
      'index 2e3c4d5..8f9d742 100644',
      '--- a/src/components/animated-content.tsx',
      '+++ b/src/components/animated-content.tsx',
      '@@ -156,6 +156,7 @@ export function AnimatedContent() {',
      '+  // Add new animation effects',
      '+  const fadeInAnimation = { opacity: [0, 1], y: [20, 0] };'
    ]
  },
  {
    command: 'git checkout -b feature/animations',
    outputs: [
      'Switched to a new branch \'feature/animations\'',
      'M  src/components/animated-content.tsx'
    ]
  },
  {
    command: 'git add -p',
    outputs: [
      'diff --git a/src/components/animated-content.tsx b/src/components/animated-content.tsx',
      '@@ -156,6 +156,7 @@',
      ' Stage this hunk [y,n,q,a,d,/,j,J,g,e,?]? y',
      'Applied patch to \'src/components/animated-content.tsx\' cleanly.'
    ]
  },
  {
    command: 'git commit -m "feat: add fade animations"',
    outputs: [
      '[feature/animations 8f9d742] feat: add fade animations',
      ' 1 file changed, 24 insertions(+), 12 deletions(-)'
    ]
  },
  {
    command: 'git push -u origin feature/animations',
    outputs: [
      'Enumerating objects: 12, done.',
      'Writing objects: 100% (8/8), 1.22 KiB | 1.22 MiB/s, done.',
      'remote: Creating pull request for feature/animations',
      'To github.com:lhndl93/leehindle.dev.git',
      ' * [new branch]    feature/animations -> feature/animations'
    ]
  },
  {
    command: 'git checkout main',
    outputs: [
      'Switched to branch \'main\''
    ]
  },
  {
    command: 'git pull origin main',
    outputs: [
      'remote: Enumerating objects: 5, done.',
      'Unpacking objects: 100% (5/5), done.',
      'From github.com:lhndl93/leehindle.dev',
      ' * branch            main       -> FETCH_HEAD',
      'Fast-forward'
    ]
  },
  {
    command: 'git merge feature/animations',
    outputs: [
      'Updating e3b2c51..8f9d742',
      'Fast-forward',
      ' src/components/animated-content.tsx | 36 ++++++++++++++++++++------------',
      ' 1 file changed, 24 insertions(+), 12 deletions(-)'
    ]
  }
];

export function AnimatedContent() {
  const [mounted, setMounted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<Array<{
    type: 'command' | 'output';
    content: string;
  }>>([
    { type: 'command', content: 'npm create next-app' },
    { type: 'output', content: 'Creating a new Next.js app...' },
    { type: 'command', content: 'git commit -m "feat: initial commit"' },
    { type: 'output', content: '[main 2e3c4d5] Initial commit' },
  ]);

  // Use layout effect for mounting to avoid hydration mismatch
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Function to handle command changes
  const handleCommandChange = (command: string) => {
    const matchingCommand = terminalCommands.find(c => c.command === command);
    if (matchingCommand) {
      // Add the command to history first
      setTerminalLines(prev => [...prev, { type: 'command' as const, content: command }]);
      
      // Then add each output line with a delay
      matchingCommand.outputs.forEach((line, index) => {
        setTimeout(() => {
          setTerminalLines(prev => [...prev, { type: 'output' as const, content: line }]);
        }, index * 50);
      });

      // Keep only the last 50 lines to prevent too much history
      setTerminalLines(prev => prev.slice(-50));
    }
  };

  return (
    <motion.div
      className="rounded-lg bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm font-mono text-sm overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex flex-col">
        {/* Window Controls */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/70 border-b border-zinc-800/50">
          <div className="flex items-center gap-1.5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          <div className="text-zinc-400 text-xs font-medium">~/leehindle.dev</div>
          <div className="w-16" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-2 pt-2 bg-zinc-900/50 text-xs">
          <div className="px-3 py-1.5 bg-zinc-900/70 text-zinc-300 rounded-t-md border-t border-x border-zinc-800/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500/50" />
              main
            </div>
          </div>
          <div className="px-3 py-1.5 text-zinc-500 hover:text-zinc-400 cursor-pointer transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500/50" />
              feature/animations
            </div>
          </div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4">
        <div className="h-[300px] overflow-y-auto flex flex-col-reverse scrollbar-thin scrollbar-track-zinc-900/20 scrollbar-thumb-zinc-800/50 hover:scrollbar-thumb-zinc-700/50">
          <div className="min-h-full flex flex-col justify-end">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {line.type === 'command' ? (
                  <div className="text-green-400">{">"} {line.content}</div>
                ) : (
                  <div className="text-zinc-400 ml-2">{line.content}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-green-400 flex items-center gap-2 mt-2 border-t border-zinc-800/50 pt-2">
          <span>{">"}</span>
          <TypeAnimation
            sequence={[
              'git status',
              500,
              '',
              () => handleCommandChange('git status'),
              1500,
              'git diff',
              500,
              '',
              () => handleCommandChange('git diff'),
              1500,
              'git checkout -b feature/animations',
              500,
              '',
              () => handleCommandChange('git checkout -b feature/animations'),
              1500,
              'git add -p',
              500,
              '',
              () => handleCommandChange('git add -p'),
              1500,
              'git commit -m "feat: add fade animations"',
              500,
              '',
              () => handleCommandChange('git commit -m "feat: add fade animations"'),
              1500,
              'git push -u origin feature/animations',
              500,
              '',
              () => handleCommandChange('git push -u origin feature/animations'),
              1500,
              'git checkout main',
              500,
              '',
              () => handleCommandChange('git checkout main'),
              1500,
              'git pull origin main',
              500,
              '',
              () => handleCommandChange('git pull origin main'),
              1500,
              'git merge feature/animations',
              500,
              '',
              () => handleCommandChange('git merge feature/animations'),
              1500,
            ]}
            repeat={Infinity}
            className="text-zinc-400"
            cursor={true}
            speed={50}
            omitDeletionAnimation={true}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900/70 border-t border-zinc-800/50 text-xs">
        <div className="flex items-center gap-3 text-zinc-500">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            <span>main</span>
          </div>
          <span>•</span>
          <span>utf-8</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-500">
          <span>Git</span>
          <span>•</span>
          <span>Node v20.11.0</span>
        </div>
      </div>
    </motion.div>
  );
} 