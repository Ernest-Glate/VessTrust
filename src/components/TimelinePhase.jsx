"use client";

import { motion } from "framer-motion";

export default function TimelinePhase() {
  const phases = [
    {
      number: "01",
      title: "Phase 1: Ghana Launch",
      status: "Active",
      countries: "🇬🇭 Ghana",
      details: "Established BOG compliance framework, live API integrations with MTN MoMo, Telecel Cash, and AirtelTigo. Calibrated baseline credit scoring models.",
    },
    {
      number: "02",
      title: "Phase 2: East & West Expansion",
      status: "Q1 2027",
      countries: "🇳🇬 Nigeria ✦ 🇰🇪 Kenya",
      details: "Expanding integrations to Safaricom M-Pesa and MTN Nigeria. Enabling cross-border identity lookup for trade finance.",
    },
    {
      number: "03",
      title: "Phase 3: Broad Regional Portability",
      status: "Q3 2027",
      countries: "🇨🇮 Côte d'Ivoire ✦ 🇸🇳 Senegal ✦ 🇺🇬 Uganda ✦ 🇷🇼 Rwanda",
      details: "Scaling database connectors across Francophone Africa and East African corridors to serve cross-border trade networks.",
    },
    {
      number: "04",
      title: "Phase 4: Pan-African Credit Layer",
      status: "2028",
      countries: "🌍 All Major Corridors",
      details: "Deploying fully portable credit profiles accepted by commercial banks, digital lenders, and international trade partners.",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-6">
      {/* Central Line (hidden on mobile, visible on desktop) */}
      <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200" />

      {/* Gold overlay line (animates on load/scroll) */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "90%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-[31px] md:left-1/2 top-4 w-[2px] bg-gold origin-top"
      />

      <div className="space-y-12">
        {phases.map((phase, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={phase.number}
              className={`flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              } relative`}
            >
              {/* Central Indicator Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-[7px] top-1.5 z-10 w-[16px] h-[16px] rounded-full border-4 border-[#F8F8F6] bg-gold shadow" />

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white border border-slate-200/80 hover:border-gold/30 p-6 rounded-xl relative shadow-md transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Phase number badge floating */}
                  <div className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider text-gold px-2.5 py-0.5 bg-gold/10 rounded-md">
                    {phase.status}
                  </div>

                  <span className="text-gold font-mono text-xs font-semibold block mb-1">
                    PHASE {phase.number}
                  </span>
                  
                  <h4 className="text-slate-900 font-playfair text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                    {phase.title}
                  </h4>

                  <div className="text-xs text-gold/90 font-semibold mb-3 font-inter">
                    {phase.countries}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {phase.details}
                  </p>
                </motion.div>
              </div>

              {/* Spacing placeholder for layout on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
