"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { buttonStyles, gradientText } from "@/lib/styles";

export default function ProjectPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Background */}
      <div className="fixed inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 pt-8 pb-24">
          {/* Header Section */}
          <div className="max-w-4xl space-y-6 mb-16">
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-full bg-blue-400/10 border border-blue-400/20">
                <span className="text-sm text-blue-400">Project Details</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                  Live
                </span>
                <span className="text-sm text-zinc-500">
                  Last updated: 2024-02
                </span>
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${gradientText}`}>
                UK Journey Time Calculator
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
                A sophisticated journey time calculator built specifically for UK routes, combining OpenStreetMap&apos;s routing capabilities with a custom traffic prediction system.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/lhndl93/journey-time-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonStyles.secondary} group`}
                >
                  <Github className="w-5 h-5" />
                  <span>View Source</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Project Preview and Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Preview */}
              <motion.div
                variants={imageScale}
                className="relative aspect-video rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02] z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent z-30" />
                <Image
                  src="/projects/journey-time-calculator.png"
                  alt="Journey Time Calculator preview"
                  className="object-contain rounded-2xl ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-105"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                  priority
                />
              </motion.div>

              {/* Project Content */}
              <motion.div
                variants={fadeInUp}
                className="space-y-12"
              >
                {/* Overview Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-zinc-200">Project Overview</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                    <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                    <div className="relative text-zinc-400 leading-relaxed space-y-4">
                      <p>
                        A sophisticated journey time calculator built specifically for UK routes. The application combines OpenStreetMap&apos;s routing capabilities with a custom traffic prediction system that considers peak hours and known congestion points.
                      </p>
                      <p>
                        The modern, responsive interface provides users with clear journey time estimates and interactive route visualization, making it easy to plan journeys around peak traffic times.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Features Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-zinc-200">Key Features</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                    <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                    <div className="relative">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400">
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Intelligent time predictions based on time of day</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Interactive map visualization using Leaflet</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Real-time journey calculations using OSRM</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Congestion alerts for major M25 junctions</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Dark/Light theme with system preference</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Accessible UI components using Radix UI</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Mobile-first responsive design</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Clean, modern interface with Tailwind CSS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-zinc-200">Technical Implementation</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                      <div className="relative space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-200 mb-4">Frontend Architecture</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400">
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>Next.js 14 App Router</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>React Server Components</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>TypeScript</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>Tailwind CSS</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>Radix UI</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-purple-400">•</span>
                              <span>Leaflet for map visualization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                      <div className="relative space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-200 mb-4">Performance Optimization</h3>
                          <ul className="space-y-3 text-zinc-400">
                            <li className="flex items-baseline gap-2">
                              <span className="text-pink-400">•</span>
                              <span>Server-side rendering for fast initial load</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-pink-400">•</span>
                              <span>Optimized map tile loading</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-pink-400">•</span>
                              <span>Efficient route calculations</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                              <span className="text-pink-400">•</span>
                              <span>Minimal client-side JavaScript</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="sticky top-24 space-y-6">
                {/* Tech Stack */}
                <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                  <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js 14",
                        "TypeScript",
                        "React",
                        "Tailwind CSS",
                        "Radix UI",
                        "Leaflet",
                        "OSRM API",
                        "OpenStreetMap"
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full px-3 py-1 text-sm font-medium bg-zinc-900 text-zinc-300 ring-1 ring-inset ring-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800">
                  <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Project Stats</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-zinc-400">
                        <span>Role:</span>
                        <span className="text-zinc-200">Full Stack Developer</span>
                      </li>
                      <li className="flex justify-between text-zinc-400">
                        <span>Timeline:</span>
                        <span className="text-zinc-200">February 2024</span>
                      </li>
                      <li className="flex justify-between text-zinc-400">
                        <span>Status:</span>
                        <span className="text-emerald-400">Live</span>
                      </li>
                      <li className="flex justify-between text-zinc-400">
                        <span>Version:</span>
                        <span className="text-zinc-200">1.0.0</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 