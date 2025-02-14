"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buttonStyles, gradientText } from "@/lib/styles";

interface TechCategory {
  name: string;
  description: string;
  icon: string;
  technologies: {
    name: string;
    level: "Expert" | "Advanced" | "Intermediate";
    experience: string;
    description: string;
    highlights?: string[];
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend Development",
    description: "Specializing in modern React ecosystems with a focus on performance and user experience",
    icon: "🎨",
    technologies: [
      {
        name: "Next.js",
        level: "Expert",
        experience: "5 years",
        description: "Building high-performance web applications with App Router and Server Components",
        highlights: [
          "Server-side rendering and static site generation",
          "Route handlers and middleware",
          "Performance optimization and caching strategies",
          "API integration and data fetching patterns"
        ]
      },
      {
        name: "React",
        level: "Expert",
        experience: "8 years",
        description: "Advanced component architecture and state management",
        highlights: [
          "Custom hooks and performance optimization",
          "Context API and state management",
          "Component composition patterns",
          "React Server Components"
        ]
      },
      {
        name: "TypeScript",
        level: "Expert",
        experience: "7 years",
        description: "Type-safe development with advanced patterns",
        highlights: [
          "Generic types and type inference",
          "Custom type utilities",
          "Advanced type patterns",
          "Type-safe API integration"
        ]
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        experience: "4 years",
        description: "Building responsive and maintainable UI systems",
        highlights: [
          "Custom design systems",
          "Component variants",
          "Animation integration",
          "Dark mode implementation"
        ]
      }
    ]
  },
  {
    name: "Backend Development",
    description: "Creating scalable and secure server-side applications with modern architectures",
    icon: "⚡",
    technologies: [
      {
        name: "Node.js",
        level: "Expert",
        experience: "10 years",
        description: "Building scalable backend services and APIs",
        highlights: [
          "RESTful API design",
          "GraphQL implementation",
          "Microservices architecture",
          "Real-time applications with WebSocket"
        ]
      },
      {
        name: "Python",
        level: "Expert",
        experience: "12 years",
        description: "Data processing and backend service development",
        highlights: [
          "FastAPI and Django frameworks",
          "Data analysis and processing",
          "Machine learning integration",
          "Automation and scripting"
        ]
      },
      {
        name: "PostgreSQL",
        level: "Expert",
        experience: "10 years",
        description: "Database design and optimization",
        highlights: [
          "Performance optimization",
          "Complex query design",
          "Data modeling",
          "Indexing strategies"
        ]
      }
    ]
  },
  {
    name: "DevOps & Cloud",
    description: "Implementing robust deployment pipelines and cloud infrastructure",
    icon: "☁️",
    technologies: [
      {
        name: "Docker",
        level: "Expert",
        experience: "6 years",
        description: "Container orchestration and deployment",
        highlights: [
          "Multi-container applications",
          "Custom image optimization",
          "Docker Compose",
          "Container security"
        ]
      },
      {
        name: "AWS",
        level: "Expert",
        experience: "8 years",
        description: "Cloud infrastructure and serverless architecture",
        highlights: [
          "EC2 and ECS deployment",
          "Lambda functions",
          "S3 and CloudFront",
          "RDS and DynamoDB"
        ]
      },
      {
        name: "CI/CD",
        level: "Expert",
        experience: "8 years",
        description: "Automated testing and deployment pipelines",
        highlights: [
          "GitHub Actions",
          "Automated testing",
          "Deployment strategies",
          "Infrastructure as Code"
        ]
      }
    ]
  }
];

export default function TechStackPage() {
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
                <span className="text-sm text-blue-400">Technical Expertise</span>
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${gradientText}`}>
                Tech Stack
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
                A deep dive into my technical capabilities and expertise. Each technology represents years of hands-on experience
                and continuous learning in modern web development.
              </p>
            </motion.div>
          </div>

          {/* Categories */}
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="space-y-8 mb-16"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-200">{category.name}</h2>
                    <p className="text-zinc-400 mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.01 }}
                    className={`relative rounded-xl ${
                      index === 0 
                        ? "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10"
                        : index === 1
                        ? "bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10"
                        : "bg-gradient-to-br from-pink-400/10 via-blue-400/10 to-purple-400/10"
                    } p-6 ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700 transition-all overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                    <div className="relative space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-zinc-200">
                          {tech.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-zinc-500">{tech.experience}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tech.level === "Expert" 
                              ? "bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20"
                              : tech.level === "Advanced"
                              ? "bg-blue-400/10 text-blue-400 ring-1 ring-inset ring-blue-400/20"
                              : "bg-yellow-400/10 text-yellow-400 ring-1 ring-inset ring-yellow-400/20"
                          }`}>
                            {tech.level}
                          </span>
                        </div>
                      </div>
                      <p className="text-zinc-400">{tech.description}</p>
                      {tech.highlights && (
                        <ul className="space-y-1.5">
                          {tech.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-baseline gap-2 text-sm text-zinc-400">
                              <span className={`${
                                category.name === "Frontend Development" 
                                  ? "text-blue-400"
                                  : category.name === "Backend Development"
                                  ? "text-purple-400"
                                  : "text-pink-400"
                              }`}>•</span>
                              <span className="flex-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-800 p-8 text-center mt-16"
          >
            <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-zinc-200 mb-4">
                Let&apos;s Build Something Together
              </h2>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Looking for a developer who can bring your ideas to life with modern tech?
                Let&apos;s discuss how we can create something amazing together.
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
    </>
  );
} 