"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <motion.div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center" whileHover={{ rotate: 5 }}>
              <span className="text-white font-bold text-sm">PR</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">PledgeRun</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="btn-ghost text-sm">Log in</Link>
            <Link href="/register" className="btn-primary text-sm !py-2 !px-4">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
