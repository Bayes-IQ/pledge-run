"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const steps = [
  { icon: "\uD83C\uDFAF", title: "Set a Goal", desc: "Choose your weekly running distance target" },
  { icon: "\uD83D\uDCB0", title: "Make a Pledge", desc: "Put $5\u2013$100 on the line" },
  { icon: "\u2764\uFE0F", title: "Pick a Charity", desc: "Choose where your money goes if you miss" },
  { icon: "\uD83C\uDFC3", title: "Run", desc: "Apple Health tracks your workouts automatically" },
  { icon: "\uD83C\uDF89", title: "Results", desc: "Hit your goal? Celebrate. Miss? Your charity wins." },
];

const stats = [
  { value: "$2.4M", label: "Donated to charity" },
  { value: "89%", label: "Goal completion rate" },
  { value: "50K+", label: "Active runners" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="inline-flex items-center gap-2 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Now in beta — join the movement
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">Run with</span>
              <br />
              <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">real stakes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Set running goals. Put money on the line. Miss your goal? The money goes to a charity you love. <span className="text-gray-900 dark:text-white font-medium">Either way, you win.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary text-lg !py-4 !px-10 !rounded-2xl">Start Your First Pledge</motion.button>
              </Link>
              <Link href="#how-it-works" className="btn-ghost text-lg">See how it works \u2192</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center gap-12 sm:gap-20 mt-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{s.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Five steps. Real accountability. Zero excuses.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 text-center relative">
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300 dark:text-gray-700 text-xl">\u2192</div>}
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card p-12 bg-gradient-to-br from-brand-500 to-brand-600 border-none">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to run with purpose?</h2>
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Join thousands of runners who have donated over $2.4 million to charity — while crushing their fitness goals.</p>
            <Link href="/register">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-brand-600 font-bold py-4 px-10 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all">Get Started Free</motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>\u00A9 2026 PledgeRun. Run with purpose.</p>
        </div>
      </footer>
    </div>
  );
}
