"use client";

import { motion } from "framer-motion";

export default function FactorCard() {
  const fields = [
    {
      key: "tx_frequency",
      label: "Transaction Frequency",
      description: "Counts how often mobile money transfers occur. Consistent weekly flow signals active economic participation.",
    },
    {
      key: "avg_tx_value",
      label: "Average Transaction Value",
      description: "Determines the typical volume of cash moved per transaction, helping establish basic credit capacity tiers.",
    },
    {
      key: "balance_retention",
      label: "Balance Retention",
      description: "Measures the ratio of capital retained in the wallet over a 30-day window, signaling cash reserves and liquidity.",
    },
    {
      key: "counterparty_count",
      label: "Counterparty Diversity",
      description: "Calculates the number of unique business partners, vendors, or buyers connected to the user to assess business health.",
    },
    {
      key: "bill_consistency",
      label: "Bill Repayment Consistency",
      description: "Analyzes recurring payment records for utilities, solar power, water, or school fees for timeliness.",
    },
    {
      key: "loan_repayment",
      label: "Micro-loan Repayment history",
      description: "Queries historical payment profiles of prior short-term mobile credit products, verifying repayment discipline.",
    },
    {
      key: "airtime_regularity",
      label: "Airtime Top-Up Behaviour",
      description: "Monitors daily or weekly airtime purchases. Regular, incremental consumption reflects predictable micro-income.",
    },
  ];

  // Animation config
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {fields.map((field, idx) => {
        // We want a 4+3 grid: on desktop (4 columns), the last 3 items will sit in the second row.
        // Tailwind handles this beautifully with grid col spans or just standard flow.
        // Let's make it standard flow but center the second row on lg screen if possible.
        // To keep layout extremely premium and simple, grid-cols-1 md:grid-cols-2 lg:grid-cols-4 is very clean,
        // and we can make the 7th item center or span if needed, but standard flow works great.
        // Or we can specifically style it so that on lg screens the last 3 items are centered.
        // We can do this by wrapping the grid in outer containers or using col-start modifiers,
        // but standard grid flow of 4+3 is actually very standard and readable. Let's make the 7th card span 2 cols on mobile/medium or just let it occupy its space.
        
        return (
          <motion.div
            key={field.key}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`bg-white border border-slate-200/80 hover:border-gold/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden ${
              idx >= 4 ? "lg:col-span-1" : ""
            }`}
          >
            <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="font-mono text-gold text-xs font-semibold tracking-wider mb-2">
                {field.key}
              </div>
              <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2 group-hover:text-gold transition-colors">
                {field.label}
              </h5>
              <p className="text-slate-500 text-xs leading-relaxed">
                {field.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
