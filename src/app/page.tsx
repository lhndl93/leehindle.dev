"use client";

import { AnimatedContent } from "@/components/animated-content";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Rocket, ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { buttonStyles, gradientText } from "@/lib/styles";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <div className="fixed inset-0 bg-zinc-950">
          <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/50 backdrop-blur-md border-b border-zinc-800/50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className={`text-xl font-bold ${gradientText}`}>
                  LH
                </Link>
                <div className="flex items-center gap-6">
                  <Link 
                    href="/about" 
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    href="/tech-stack" 
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    Tech Stack
                  </Link>
                  <Link 
                    href="/projects" 
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    Projects
                  </Link>
                  <motion.a
                    href="mailto:contact@leehindle.dev"
                    className={`${buttonStyles.primary} text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Grid Layout */}
          <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Social Links */}
              <div className="lg:col-span-1 lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2">
                <div className="flex lg:flex-col items-center justify-center gap-6">
                  <motion.a
                    href="https://github.com/lhndl93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/leehindle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:contact@leehindle.dev"
                    className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-11 lg:col-start-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Left Column - Introduction */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20">
                        <Rocket className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400">Operations Manager & Developer</span>
                      </div>

                      <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight ${gradientText}`}>
                        Lee Hindle
                      </h1>

                      <p className="text-lg text-zinc-400 leading-relaxed">
                        Operations Manager by day, Software Developer by night. Currently managing transport operations
                        while actively pursuing opportunities in full-stack development. Combining operational
                        expertise with a passion for building modern web applications and solving complex problems.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/about" className="w-full sm:w-auto">
                          <motion.div
                            className={`${buttonStyles.primary} w-full sm:w-auto justify-center group`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Explore my journey</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </motion.div>
                        </Link>
                        <motion.a
                          href="https://github.com/lhndl93"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${buttonStyles.secondary} w-full sm:w-auto justify-center group`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View GitHub</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="relative rounded-xl bg-blue-400/10 p-4 ring-1 ring-inset ring-blue-400/20">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">⚡</span>
                          <div>
                            <div className="text-sm text-zinc-400">Experience</div>
                            <div className="text-lg font-semibold text-zinc-200">12+ years</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-xl bg-purple-400/10 p-4 ring-1 ring-inset ring-purple-400/20">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🚀</span>
                          <div>
                            <div className="text-sm text-zinc-400">Projects</div>
                            <div className="text-lg font-semibold text-zinc-200">50+</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Featured Skills */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-4"
                    >
                      <h3 className="text-sm text-zinc-400 uppercase tracking-wider">Featured Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Next.js",
                          "TypeScript",
                          "React",
                          "Node.js",
                          "Python",
                          "AWS"
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full px-3 py-1 text-sm font-medium bg-zinc-900 text-zinc-300 ring-1 ring-inset ring-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Terminal */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="lg:sticky lg:top-24 h-fit max-h-[calc(100vh-8rem)]"
                  >
                    <AnimatedContent />
                  </motion.div>
                </div>

                {/* Featured Work Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-24 mb-16 space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-zinc-200">Featured Work</h2>
                    <Link 
                      href="/projects"
                      className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors group flex items-center gap-1"
                    >
                      View all projects
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="group relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-grid-white opacity-[0.02] rounded-xl" />
                      <div className="relative space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                            Latest
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">leehindle.dev</h3>
                        <p className="text-sm text-zinc-400">
                          Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.
                          Features modern design and smooth animations.
                        </p>
                        <div className="flex items-center gap-4">
                          <Link
                            href="/projects/leehindle-dev"
                            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors group flex items-center gap-1"
                          >
                            View details
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-grid-white opacity-[0.02] rounded-xl" />
                      <div className="relative space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-400/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
                            Coming Soon
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">Next Project</h3>
                        <p className="text-sm text-zinc-400">
                          Stay tuned for my next project. Something exciting is in the works!
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-zinc-500">
                            In Development
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
