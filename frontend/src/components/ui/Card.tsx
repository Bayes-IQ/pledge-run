"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({ hover = false, padding = "md", children, className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" } : undefined}
      className={clsx("card", padding === "sm" && "p-4", padding === "md" && "p-6", padding === "lg" && "p-8", hover && "cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
