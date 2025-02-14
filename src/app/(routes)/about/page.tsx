"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "@/lib/icons";
import { buttonStyles, gradientText } from "@/lib/styles";

export default function AboutPage() {
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
                <span className="text-sm text-blue-400">About Me</span>
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${gradientText}`}>
                Lee Hindle
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
                Operations Manager by day, Software Developer by night. Currently managing transport operations
                while actively pursuing opportunities in full-stack development. Combining operational
                expertise with a passion for creating efficient, user-focused web applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:contact@leehindle.dev"
                  className={`${buttonStyles.primary} group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@leehindle.dev</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </motion.a>
                <motion.a
                  href="https://github.com/lhndl93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonStyles.secondary} group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/leehindle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonStyles.secondary} group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { label: "Experience", value: "12+ years", icon: "⚡", gradient: "from-blue-400/10 via-purple-400/10 to-pink-400/10" },
              { label: "Projects", value: "50+", icon: "🚀", gradient: "from-purple-400/10 via-pink-400/10 to-blue-400/10" },
              { label: "Technologies", value: "15+", icon: "💻", gradient: "from-pink-400/10 via-blue-400/10 to-purple-400/10" },
              { label: "Location", value: "United Kingdom", icon: "🌍", gradient: "from-blue-400/10 via-purple-400/10 to-pink-400/10" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className={`relative rounded-xl bg-gradient-to-br ${stat.gradient} p-4 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="text-sm text-zinc-400">{stat.label}</div>
                    <div className="text-lg font-semibold text-zinc-200">{stat.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Background Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-200">My Journey</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/20 ring-1 ring-blue-400/30">
                      <span className="text-xl">🎮</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">From Gaming to Development</h3>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    My journey into software development began with a passion for gaming. As an avid gamer,
                    I found myself drawn to creating plugins for Minecraft and developing addons for World of Warcraft.
                    This hands-on experience sparked my interest in programming and showed me the incredible
                    possibilities of software development.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400/20 ring-1 ring-purple-400/30">
                      <span className="text-xl">💻</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">Professional Evolution</h3>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    What started as a hobby has evolved into a 12-year professional career in software development.
                    I&apos;ve carried that same enthusiasm into building modern web applications, focusing on pushing
                    technical boundaries while delivering exceptional user experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8 mt-16"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-200">Professional Experience</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transport Role */}
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/20 ring-1 ring-blue-400/30">
                        <span className="text-xl">🚛</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-zinc-200">Operations Manager</h3>
                        <p className="text-sm text-zinc-400">Transport and Logistics Management</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-400/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
                      Current Role
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-4 ring-1 ring-inset ring-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-200 mb-3">Key Responsibilities</h4>
                      <ul className="grid gap-2">
                        {[
                          "Fleet and resource management",
                          "Regulatory compliance oversight",
                          "Team leadership and development",
                          "Budget management",
                          "Process optimization",
                          "Risk management"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-baseline gap-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-4 ring-1 ring-inset ring-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-200 mb-3">Key Achievements</h4>
                      <ul className="grid gap-2">
                        {[
                          "Implemented route optimization systems",
                          "Reduced operational costs by 25%",
                          "Improved fleet efficiency",
                          "Enhanced safety protocols",
                          "Streamlined compliance processes",
                          "Developed team training programs"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-baseline gap-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Development Role */}
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400/20 ring-1 ring-purple-400/30">
                        <span className="text-xl">💻</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-zinc-200">Software Development</h3>
                        <p className="text-sm text-zinc-400">BSc Computer Science, The Open University</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-400/10 text-purple-400 ring-1 ring-inset ring-purple-400/20">
                      Side Projects
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-4 ring-1 ring-inset ring-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-200 mb-3">Development Experience</h4>
                      <ul className="grid gap-2">
                        {[
                          "Built and maintained internal business applications",
                          "Developed custom WordPress themes and plugins",
                          "Created automation tools for operational efficiency",
                          "Implemented responsive web designs",
                          "Integrated third-party APIs and services",
                          "Managed hosting and deployment infrastructure"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-baseline gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-4 ring-1 ring-inset ring-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-200 mb-3">Current Focus</h4>
                      <ul className="grid gap-2">
                        {[
                          "Modern web development with Next.js and React",
                          "Full-stack TypeScript applications",
                          "Cloud infrastructure and DevOps practices",
                          "UI/UX design implementation",
                          "Performance optimization",
                          "Seeking full-time development opportunities"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-baseline gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="space-y-8 mt-16"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-200">Professional Development</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Technical Certifications */}
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/20 ring-1 ring-blue-400/30">
                      <span className="text-xl">🎓</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">Technical Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Cisco Certified Network Associate (CCNA)",
                      "CompTIA Security+",
                      "Certificate in Mortgage Advice (CII)"
                    ].map((cert, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-3 ring-1 ring-inset ring-zinc-800"
                      >
                        <div className="flex items-baseline gap-2 text-sm">
                          <span className="text-blue-400">•</span>
                          <span className="text-zinc-300">{cert}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Professional Memberships */}
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400/20 ring-1 ring-purple-400/30">
                      <span className="text-xl">🏆</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">Professional Memberships</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Chartered Member of Institute of Logistics and Transport (CMILT)",
                      "Member of Chartered Management Institute",
                      "Member of The Institute of Leadership"
                    ].map((membership, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-3 ring-1 ring-inset ring-zinc-800"
                      >
                        <div className="flex items-baseline gap-2 text-sm">
                          <span className="text-purple-400">•</span>
                          <span className="text-zinc-300">{membership}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Key Skills */}
              <motion.div
                className="relative rounded-xl bg-gradient-to-br from-pink-400/10 via-blue-400/10 to-purple-400/10 p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-400/20 ring-1 ring-pink-400/30">
                      <span className="text-xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">Key Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Financial Services",
                      "IT Infrastructure",
                      "Network Security",
                      "Transport Operations",
                      "Team Leadership",
                      "Risk Management",
                      "Regulatory Compliance",
                      "Project Management",
                      "Process Optimization",
                      "Customer Relations"
                    ].map((skill) => (
                      <motion.span
                        key={skill}
                        className="rounded-full px-3 py-1 text-sm font-medium bg-zinc-900/50 backdrop-blur-sm text-zinc-300 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="relative bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 p-8 text-center mt-16"
          >
            <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-zinc-200 mb-4">
                Interested in Technical Details?
              </h2>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Check out my tech stack page for a detailed breakdown of my technical expertise and skills.
              </p>
              <motion.a
                href="/tech-stack"
                className={`${buttonStyles.primary} inline-flex group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Tech Stack</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 