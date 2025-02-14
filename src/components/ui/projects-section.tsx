"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonStyles, cardStyles, gradientText, containerVariants, itemVariants } from "@/lib/styles";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  status: "Live" | "In Development" | "Completed";
  lastUpdated: string;
  role: string;
}

const featuredProject: Project = {
  title: "leehindle.dev",
  description: "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features modern design, smooth animations, and responsive layout.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
  image: "/projects/leehindle-dev.png",
  status: "Live",
  lastUpdated: "2024-02",
  role: "Full Stack Developer"
};

export function ProjectsSection() {
  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <motion.div 
          className="space-y-4 mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-zinc-400 uppercase tracking-wider"
            variants={itemVariants}
          >
            <span className="h-px w-8 bg-zinc-800" />
            <span>Featured Project</span>
            <span className="h-px w-8 bg-zinc-800" />
          </motion.div>

          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center ${gradientText}`}
            variants={itemVariants}
          >
            Latest Work
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-center max-w-2xl mx-auto text-zinc-400 leading-relaxed"
            variants={itemVariants}
          >
            A highlight of my most recent project, showcasing my current focus and technical expertise.
          </motion.p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          variants={itemVariants}
          className={`group relative ${cardStyles.glass} ${cardStyles.hover}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Project Info */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <div>
                <motion.div 
                  className="flex items-center gap-3 mb-3"
                  variants={itemVariants}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                    Featured
                  </span>
                  <span className="text-sm text-zinc-500">
                    Last updated: {featuredProject.lastUpdated}
                  </span>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-zinc-100 mb-2"
                  variants={itemVariants}
                >
                  {featuredProject.title}
                </motion.h3>
                <motion.p 
                  className="text-zinc-400 leading-relaxed"
                  variants={itemVariants}
                >
                  {featuredProject.description}
                </motion.p>
              </div>

              {/* Tech Stack */}
              <motion.div variants={itemVariants}>
                <h4 className="text-sm text-zinc-500 mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.slice(0, 3).map((tech) => (
                    <motion.span
                      key={tech}
                      className="rounded-full px-3 py-1 text-sm font-medium bg-zinc-900 text-zinc-300 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Link */}
              <motion.div 
                className="flex gap-4"
                variants={itemVariants}
              >
                <Link
                  href="/projects/leehindle-dev"
                  className={buttonStyles.primary}
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Project Preview */}
            <motion.div 
              className="relative aspect-[16/9] lg:aspect-auto rounded-xl overflow-hidden"
              variants={itemVariants}
            >
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
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Role Badge */}
              <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-zinc-400">
                {featuredProject.role}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 