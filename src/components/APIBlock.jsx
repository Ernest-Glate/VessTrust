"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function APIBlock({ type = "query" }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const schemaLines = [
    `{`,
    `  "status": "success",`,
    `  "fields": {`,
    `    "tx_frequency": 142,        // count per month`,
    `    "avg_tx_value": 450.50,     // currency normalized`,
    `    "balance_retention": 0.28,  // ratio of income retained`,
    `    "counterparty_count": 42,   // unique transaction links`,
    `    "bill_consistency": 0.95,   // utility bill on-time ratio`,
    `    "loan_repayment": 1.00,      // history of micro-loan repayment`,
    `    "airtime_regularity": 0.88  // daily/weekly top-up consistency`,
    `  }`,
    `}`
  ];

  const queryLines = [
    `// POST /v1/score/query`,
    `{`,
    `  "consent_token": "tok_momo_8f2a79c1",`,
    `  "lender_id": "len_7721",`,
    `  "callback_url": "https://api.lender.com/vess-callback"`,
    `}`,
    ``,
    `// HTTP/1.1 200 OK`,
    `{`,
    `  "score_id": "vsc_88921a9f",`,
    `  "score": 742,`,
    `  "risk_tier": "A1_LOW_RISK",`,
    `  "factor_codes": ["F01_CONSISTENT_FLOW", "F03_LOW_DEBT"],`,
    `  "data_freshness": "2026-07-16T01:14:00Z",`,
    `  "compliance": "BOG_COMPLIANT"`,
    `}`
  ];

  const lines = type === "schema" ? schemaLines : queryLines;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } },
  };

  const highlightLine = (line) => {
    if (line.startsWith("//")) {
      return <span className="text-slate-500 italic font-mono">{line}</span>;
    }
    // Highlight keys (gold), values (emerald or amber/sky), brackets/symbols (slate-300)
    const tokens = line.split(/("(?:[^"]|\\")*"\s*:|"(?:[^"]|\\")*"|\b\d+(?:\.\d+)?\b|true|false|null)/g);
    return (
      <span className="text-slate-300 font-mono">
        {tokens.map((part, i) => {
          if (part.endsWith(':') && part.startsWith('"')) {
            return <span key={i} className="text-[#DFB54C]">{part}</span>;
          }
          if (part.startsWith('"') && part.endsWith('"')) {
            return <span key={i} className="text-emerald-400/90">{part}</span>;
          }
          if (/^\b\d+(?:\.\d+)?\b$/.test(part)) {
            return <span key={i} className="text-amber-400">{part}</span>;
          }
          if (part === "true" || part === "false") {
            return <span key={i} className="text-sky-400">{part}</span>;
          }
          return part;
        })}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0A1120] border border-slate-200/80 rounded-xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:border-gold/30 transition-all duration-500 relative overflow-hidden font-mono text-xs md:text-sm"
    >
      <div className="absolute inset-0 bg-spotlight opacity-10 pointer-events-none" />
      {/* Decorative header */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4 select-none relative z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
        <span className="text-[10px] text-slate-500 uppercase tracking-widest ml-2 font-inter font-medium">
          {type === "schema" ? "connector-response.json" : "vess-score-api"}
        </span>
      </div>
 
      <motion.pre
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-x-auto whitespace-pre leading-relaxed select-text relative z-10 scrollbar-none"
      >
        <code>
          {lines.map((line, idx) => (
            <motion.div
              key={idx}
              variants={lineVariants}
              className="min-h-[1.5rem]"
            >
              {highlightLine(line)}
            </motion.div>
          ))}
        </code>
      </motion.pre>
    </div>
  );
}
