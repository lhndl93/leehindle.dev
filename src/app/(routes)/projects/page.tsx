"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { buttonStyles, gradientText } from "@/lib/styles";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  status: "Live" | "In Development" | "Completed";
  lastUpdated: string;
  role: string;
  demoUrl?: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: "leehindle.dev",
    description: "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features modern design, smooth animations, and responsive layout.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    link: "https://github.com/lhndl93/leehindle.dev",
    image: "/projects/leehindle-dev.png",
    status: "Live",
    lastUpdated: "2024-02",
    role: "Full Stack Developer",
    demoUrl: "https://leehindle.dev",
    slug: "leehindle-dev"
  },
  {
    title: "UK Journey Time Calculator",
    description: "A modern journey time calculation tool that provides accurate driving time estimates between UK locations, considering time-based traffic patterns and known congestion points.",
    tech: ["Next.js", "TypeScript", "Leaflet", "OSRM API", "Tailwind CSS", "Radix UI"],
    link: "https://github.com/lhndl93/journey-time-estimator",
    image: "/projects/journey-time-calculator.png",
    status: "Live",
    lastUpdated: "2024-02",
    role: "Full Stack Developer",
    slug: "journey-time-calculator"
  }
];

export default function ProjectsPage() {
  return (
    <>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-full bg-blue-400/10 border border-blue-400/20">
                <span className="text-sm text-blue-400">Development Projects</span>
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${gradientText}`}>
                All Projects
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
                A comprehensive showcase of my development work, from personal projects to professional solutions.
                Each project demonstrates different aspects of modern web development and problem-solving.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {/* Current Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-zinc-200">Current Projects</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <div className="grid gap-8">
                {projects.filter(p => p.status === "Live" || p.status === "In Development").map((project) => (
                  <motion.div
                    key={project.title}
                    className="group relative bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 relative">
                      {/* Project Info */}
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                              {project.status}
                            </span>
                            <span className="text-sm text-zinc-500">
                              Last updated: {project.lastUpdated}
                            </span>
                          </div>
                          <h2 className="text-2xl font-semibold text-zinc-100 mb-2">
                            {project.title}
                          </h2>
                          <p className="text-zinc-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-sm text-zinc-500 mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <motion.span
                                key={tech}
                                className="rounded-full px-3 py-1 text-sm font-medium bg-zinc-900 text-zinc-300 ring-1 ring-inset ring-zinc-800"
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4">
                          <Link
                            href={`/projects/${project.slug}`}
                            className={`${buttonStyles.primary} flex-1 justify-center`}
                          >
                            <span>View Details</span>
                            <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          </Link>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonStyles.secondary} flex-1 justify-center`}
                          >
                            <Github className="w-4 h-4" />
                            <span>Source</span>
                            <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          </a>
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${buttonStyles.primary} flex-1 justify-center`}
                            >
                              <Globe className="w-4 h-4" />
                              <span>Live Demo</span>
                              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Preview */}
                      <div className="relative aspect-[16/9] lg:aspect-auto rounded-xl overflow-hidden">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                        
                        {/* Project Image */}
                        <motion.div
                          className="absolute inset-0 rounded-xl overflow-hidden ring-1 ring-inset ring-white/10"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Role Badge */}
                        <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-zinc-400">
                          {project.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Future Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-zinc-200">Coming Soon</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <motion.div
                className="group relative bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all p-8"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-400/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
                      Planning
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-3">
                    More Projects Coming Soon
                  </h3>
                  <p className="text-zinc-400">
                    I&apos;m currently working on new and exciting projects that showcase different
                    aspects of full-stack development. Check back soon for updates!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-800 p-8 text-center mt-16"
            >
              <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
              <div className="relative">
                <h2 className="text-2xl font-semibold text-zinc-200 mb-4">
                  Interested in Collaboration?
                </h2>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  I&apos;m always open to discussing new projects and opportunities.
                  Let&apos;s create something amazing together.
                </p>
                <motion.a
                  href="mailto:contact@leehindle.dev"
                  className={`${buttonStyles.primary} inline-flex`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
} 