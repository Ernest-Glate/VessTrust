"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScoreDial() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [score, setScore] = useState(300);

  // SVG Gauge variables
  const radius = 90;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const minScore = 300;
  const maxScore = 850;
  const targetScore = 742;

  // Percentage for score positioning
  const percentage = (targetScore - minScore) / (maxScore - minScore);
  const strokeDashoffset = circumference - percentage * circumference;

  useEffect(() => {
    if (isInView) {
      const controls = animate(minScore, targetScore, {
        duration: 2.0,
        ease: "easeOut",
        onUpdate: (value) => setScore(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView]);

  // Provider badge staggered animation variations
  const badgesContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const badgeItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-8 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.025)] hover:border-gold/30 transition-all duration-500 relative overflow-hidden group"
    >
      {/* Abstract Background Design */}
      <div className="absolute inset-0 bg-spotlight opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* SVG Circle Dial */}
      <div className="relative w-56 h-56 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="112"
            cy="112"
            r={radius}
            className="stroke-slate-100"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated Gold Arc */}
          {isInView && (
            <motion.circle
              cx="112"
              cy="112"
              r={radius}
              stroke="#B59445"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 2.0, ease: "easeOut" }}
              strokeLinecap="round"
            />
          )}
        </svg>

        {/* Inner Text display */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            VESS SCORE
          </span>
          <span className="text-[#0E1629] text-5xl font-semibold font-playfair tracking-tight mt-1">
            {score}
          </span>
          <span className="text-gold text-xs font-medium tracking-wide mt-2 px-2 py-0.5 bg-gold/10 rounded-full">
            Good Standing
          </span>
        </div>
      </div>

      {/* Connection Badges */}
      <motion.div
        variants={badgesContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col gap-2 mt-6 w-full text-xs relative z-10"
      >
        <motion.div
          variants={badgeItem}
          className="flex items-center justify-between bg-slate-50/80 px-4 py-2.5 rounded-lg border border-slate-100 backdrop-blur-sm"
        >
          <span className="text-slate-700 font-medium">MTN Mobile Money</span>
          <span className="text-gold font-semibold tracking-wider font-mono">Connected</span>
        </motion.div>
        <motion.div
          variants={badgeItem}
          className="flex items-center justify-between bg-slate-50/80 px-4 py-2.5 rounded-lg border border-slate-100 backdrop-blur-sm"
        >
          <span className="text-slate-700 font-medium">AirtelTigo Money</span>
          <span className="text-gold font-semibold tracking-wider font-mono">Connected</span>
        </motion.div>
        <motion.div
          variants={badgeItem}
          className="flex items-center justify-between bg-slate-50/80 px-4 py-2.5 rounded-lg border border-slate-100 backdrop-blur-sm"
        >
          <span className="text-slate-700 font-medium">Telecel Cash</span>
          <span className="text-gold font-semibold tracking-wider font-mono">Connected</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
