"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">PR</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Log in to track your pledges</p>
        </div>
        <div className="card p-8">
          <form onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500); }} className="space-y-5">
            <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" loading={loading} className="w-full" size="lg">Log in</Button>
          </form>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Don&apos;t have an account? <Link href="/register" className="text-brand-500 hover:text-brand-600 font-medium">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}
