"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

const goals = [
  { id: 1, title: "Run 20 miles this week", progress: 14.2, target: 20, pledge: 25, charity: "St. Jude", daysLeft: 3, status: "active" as const },
  { id: 2, title: "Run 15 miles this week", progress: 15.8, target: 15, pledge: 10, charity: "Doctors Without Borders", daysLeft: 0, status: "succeeded" as const },
  { id: 3, title: "Run 25 miles this week", progress: 18.3, target: 25, pledge: 50, charity: "Habitat for Humanity", daysLeft: 0, status: "failed" as const },
];

const runs = [
  { date: "Today", distance: 4.2, duration: "38:15", pace: "9:06/mi" },
  { date: "Yesterday", distance: 3.1, duration: "27:42", pace: "8:56/mi" },
  { date: "Mon", distance: 5.5, duration: "49:30", pace: "9:00/mi" },
  { date: "Sun", distance: 1.4, duration: "12:08", pace: "8:40/mi" },
];

function Bar({ current, target }: { current: number; target: number }) {
  const pct = Math.min((current / target) * 100, 100);
  return (
    <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, ease: "easeOut" }} className={`h-full rounded-full ${pct >= 100 ? "bg-brand-500" : "bg-accent-500"}`} />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card padding="lg" className="text-center">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">7</div>
            <div className="text-sm text-gray-500 mt-1 font-medium">Week streak</div>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-5xl font-extrabold text-gray-900 dark:text-white">$185</div>
            <div className="text-sm text-gray-500 mt-1 font-medium">Saved this month</div>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-5xl font-extrabold text-accent-500">$75</div>
            <div className="text-sm text-gray-500 mt-1 font-medium">Donated to charity</div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">Your Goals</h2>
              <Link href="/goals/new"><Button size="sm">+ New Goal</Button></Link>
            </div>
            {goals.map((g, i) => (
              <motion.div key={g.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card hover padding="md">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{g.title}</h3>
                      <p className="text-sm text-gray-500">${g.pledge} pledge → {g.charity}</p>
                    </div>
                    <Badge variant={g.status === "succeeded" ? "success" : g.status === "failed" ? "danger" : "warning"}>
                      {g.status === "active" ? `${g.daysLeft}d left` : g.status === "succeeded" ? "Goal crushed!" : `$${g.pledge} donated`}
                    </Badge>
                  </div>
                  <Bar current={g.progress} target={g.target} />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{g.progress.toFixed(1)} mi</span>
                    <span>{g.target} mi goal</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Runs</h2>
            <Card>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {runs.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="py-4 first:pt-0 last:pb-0 px-1">
                    <div className="flex items-center justify-between">
                      <div><div className="font-semibold">{r.distance} mi</div><div className="text-sm text-gray-500">{r.date}</div></div>
                      <div className="text-right"><div className="text-sm font-medium">{r.duration}</div><div className="text-xs text-gray-400">{r.pace}</div></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
