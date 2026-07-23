"use client";

import { motion } from "framer-motion";

export default function PersonaPanel() {
  const personas = [
    {
      id: "abena",
      title: "The Market Trader",
      name: "Abena Mansa",
      subtitle: "Abena has been trading for 6 years. Her MoMo history proves it.",
      description:
        "Every Tuesday and Friday, Abena pays suppliers for fresh produce using mobile money. Over 6 years, she has processed thousands of micro-transactions. Traditional bank credit bureaus returned 'No Data' because she lacks a commercial bank account. VessTrust translated her transaction frequency (tx_frequency) and counterparty diversity (counterparty_count) into a 715 score, unlocking her first supplier trade loan.",
      graphic: (
        <div className="w-64 h-64 relative flex items-center justify-center bg-[#F8F8F6] rounded-full border border-gold/15 overflow-hidden shadow-inner">
          <div className="absolute top-8 left-8 w-24 h-24 bg-gold/5 rounded-full blur-xl animate-pulse" />
          {/* Inner abstract geometric representations */}
          <div className="absolute w-40 h-40 border border-gold/15 rounded-full flex items-center justify-center">
            <div className="absolute w-28 h-28 border border-gold/30 rounded-full flex items-center justify-center border-dashed">
              <span className="text-gold font-mono text-xl font-semibold">715</span>
            </div>
          </div>
          {/* Circular node connections */}
          <div className="absolute top-1/2 left-8 w-4 h-4 bg-gold rounded-full" />
          <div className="absolute top-1/3 right-12 w-3 h-3 bg-slate-400/40 rounded-full" />
          <div className="absolute bottom-12 left-1/3 w-3 h-3 bg-slate-400/20 rounded-full" />
        </div>
      ),
    },
    {
      id: "kwame",
      title: "The Diaspora Professional",
      name: "Kwame Boateng",
      subtitle: "Kwame's UK financial behaviour finally counts back home.",
      description:
        "Kwame lives in London but builds properties in Accra. He sends regular remittances and pays contractor schedules via cross-border connectors. Previously, local Ghanaian lenders treated him as a zero-history applicant. VessTrust aggregated his persistent payment frequency and remittance stability, establishing a credit footprint that allows local mortgage lenders to verify his profile instantly.",
      graphic: (
        <div className="w-64 h-64 relative flex items-center justify-center bg-white rounded-full border border-gold/15 overflow-hidden shadow-inner">
          {/* Abstract global connection grid */}
          <div className="absolute inset-4 border border-slate-100 rounded-full" />
          <div className="absolute inset-12 border border-gold/15 rounded-full flex items-center justify-center">
            <span className="text-slate-800 font-mono text-xl font-semibold">768</span>
          </div>
          {/* Animated signal rings */}
          <div className="absolute w-48 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent rotate-45" />
          <div className="absolute w-48 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -rotate-45" />
          <div className="absolute top-12 right-12 w-4 h-4 bg-gold rounded-full border-4 border-white" />
          <div className="absolute bottom-12 left-12 w-4 h-4 bg-slate-200 rounded-full border-4 border-white" />
        </div>
      ),
    },
    {
      id: "aminata",
      title: "The Rural Farmer",
      name: "Aminata Diallo",
      subtitle: "Aminata's seasonal payment patterns unlock pre-harvest financing.",
      description:
        "Aminata cultivates cocoa. Her income is highly seasonal, spiking during harvest and low during pre-planting. Traditional commercial scorecards flag her irregular monthly flows as high-risk. VessTrust's model analyzes cocoa cooperative payment records and input purchase schedules (bill_consistency), recognizing seasonal cycles rather than negative flags, providing an adjusted score of 690 to secure crop financing.",
      graphic: (
        <div className="w-64 h-64 relative flex items-center justify-center bg-[#F8F8F6] rounded-full border border-gold/15 overflow-hidden shadow-inner">
          {/* Wave/Season abstract lines */}
          <div className="absolute w-44 h-44 border border-gold/10 rounded-full" />
          <svg className="absolute w-full h-full p-8" viewBox="0 0 100 100">
            <path
              d="M10,50 Q30,20 50,50 T90,50"
              fill="none"
              stroke="#B59445"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <path
              d="M10,60 Q30,30 50,60 T90,60"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute w-20 h-20 bg-white rounded-full border border-gold/15 flex items-center justify-center">
            <span className="text-gold font-mono text-lg font-semibold">690</span>
          </div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-gold rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-0">
      {personas.map((persona, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <section
            key={persona.id}
            className={`py-20 ${
              isEven ? "bg-[#F8F8F6]" : "bg-white"
            } border-b border-slate-200/80 overflow-hidden`}
          >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:col-span-7 ${
                  isEven ? "md:order-1" : "md:order-2 md:col-start-6"
                }`}
              >
                <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                  {persona.title}
                </span>
                <h3 className="text-slate-900 text-3xl font-playfair font-semibold mb-4 leading-tight">
                  {persona.subtitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {persona.description}
                </p>
                <div className="text-xs font-semibold text-slate-700 border-l-2 border-gold pl-4 italic">
                  Case study: {persona.name}
                </div>
              </motion.div>

              {/* Graphic column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:col-span-5 flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                {persona.graphic}
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
