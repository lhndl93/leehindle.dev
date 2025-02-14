"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
      </div>

      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/50 backdrop-blur-md border-b border-zinc-800/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="relative pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </>
  );
} 