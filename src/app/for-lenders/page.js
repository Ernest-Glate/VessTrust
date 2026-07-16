"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import APIBlock from "@/components/APIBlock";
import { ArrowRight, Check, Award, Clock, Search } from "lucide-react";

export default function ForLenders() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const integrationSteps = [
    { num: "01", title: "Apply for API Access", desc: "Submit your developer credentials query and institutional details to verify licensing compliance." },
    { num: "02", title: "Access Sandbox Mode", desc: "Receive immediate sandbox environment API keys. Query mock clients to calibrate integration triggers." },
    { num: "03", title: "Integrate in Days", desc: "Write standard REST requests. Use our single endpoints to query scores with user consent tokens." },
    { num: "04", title: "Launch Production", desc: "Transition to production keys. Query live score indices and disburse microfinance products immediately." },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for testing sandbox flows and micro-lending pilots.",
      features: [
        "100 queries per month",
        "Sandbox environment access",
        "Community email support",
        "Anonymized risk-tier returns",
      ],
      cta: "Sign Up Free",
      recommended: false,
    },
    {
      name: "Growth",
      price: "$0.50",
      period: "/query",
      desc: "For active digital lenders scaling micro-loan portfolios.",
      features: [
        "Unlimited queries",
        "Production environment keys",
        "Webhook response triggers",
        "Detailed factor code reports",
        "Priority Slack support",
      ],
      cta: "Get Started",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For commercial banks, microfinance networks, and telcos.",
      features: [
        "Volume-discounted rates",
        "Custom risk score calibration",
        "Dedicated account engineers",
        "On-premise deployment options",
        "White-label user consent portals",
      ],
      cta: "Contact Sales",
      recommended: false,
    },
  ];

  return (
    <div className="relative w-full bg-[#F8F8F6] text-slate-800">
      {/* SECTION 1: HERO */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-mono text-xs font-semibold tracking-wider block mb-4"
          >
            CREDIT SCORING SOLUTIONS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-6 max-w-4xl mx-auto leading-tight text-[#0E1629]"
          >
            Score the 493 million they said were unscoreable.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed mb-10"
          >
            One API integration. Real-time credit scores. A market you currently cannot access at all.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <Link href="/contact">
              <button className="bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md hover:shadow-gold-glow">
                Request API Access
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VALUE PROPOSITIONS */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Stat Card 1 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <Search className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">60%+ Invisible</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Over sixty percent of credit applicants in Sub-Saharan Africa return zero records from traditional bureau registries, forcing manual loan rejections.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">500ms Average Speed</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Compute consumer integrity scores synchronously during loan checkout queues. Lower friction drop-offs and speed up client conversions.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">7 Key Parameters</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Uses evolutionary mobile money transaction data metrics (retention, consistency, repayment patterns) proven to map loan default risks reliably.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: API ENDPOINT PREVIEW */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              DEVELOPER DOCUMENTATION
            </span>
            <h3 className="text-slate-900 text-3xl font-playfair font-semibold mb-6">Integrate a single query endpoint.</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              Submit user-authorized credentials directly to our endpoint. Query details return normalized integers and factor reasons instantly, preventing internal compliance backlogs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>REST JSON-based client query protocol</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Automatic API payload encryption (AES-256)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Dedicated webhook responses for asynchronous alerts</span>
              </div>
            </div>
          </div>
          <div>
            <APIBlock type="query" />
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATION STEPS */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              ONBOARDING PATHWAY
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Integration steps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step) => (
              <div key={step.num} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-gold font-mono text-xs font-semibold mb-3">STEP {step.num}</div>
                <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2">{step.title}</h5>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING TIERS */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              TRANSACTION COSTING
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Pricing Tiers</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`p-8 rounded-2xl flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden ${
                  tier.recommended
                    ? "bg-white border-2 border-gold shadow-[0_15px_40px_rgba(181,148,69,0.08)] hover:border-gold-hover"
                    : "bg-white border border-slate-200/80 hover:border-gold/30"
                }`}
              >
                <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
                {tier.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase z-10 select-none shadow">
                    Recommended
                  </span>
                )}

                <div className="relative z-10">
                  <h4 className="text-slate-900 font-playfair text-xl font-semibold mb-2">{tier.name}</h4>
                  <p className="text-slate-500 text-xs mb-6 font-light leading-relaxed">{tier.desc}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-slate-900 text-4xl font-playfair font-semibold">{tier.price}</span>
                    {tier.period && <span className="text-slate-500 text-xs ml-1">{tier.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 text-xs text-slate-500">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="w-full relative z-10">
                  <button
                    className={`w-full text-center py-3 rounded-full text-xs font-semibold transition-all duration-300 ${
                      tier.recommended
                        ? "bg-gold hover:bg-gold-hover text-white hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)]"
                        : "border border-slate-300 hover:border-gold hover:text-gold text-slate-600 bg-white"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: OUTCOME REPORTING SECTION */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
                CLOSED-LOOP ML FEEDBACK
              </span>
              <h3 className="text-slate-900 text-3xl font-playfair font-semibold mb-6">
                The model improves with every loan you make.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                By integrating our `/outcome/report` endpoint, lenders report actual loan performance back to VessTrust. Our machine learning engines dynamically refine weighting variables based on real-world loan performance data.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                Lenders who consistently report outcomes contribute to a safer financial ecosystem, unlocking progressively smarter scoring profiles and discount pricing schedules.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              {/* Feedback loop visual representation */}
              <div className="bg-white border border-slate-200/80 p-8 rounded-2xl w-full max-w-sm flex flex-col gap-6 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                  <span className="text-slate-800 font-semibold font-mono">Feedback Loop</span>
                  <span className="text-gold font-semibold">Active</span>
                </div>
                
                {/* Visual steps */}
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center gap-3 bg-[#F8F8F6] p-2.5 rounded border border-slate-100">
                    <span className="text-gold font-bold">1</span>
                    <span className="text-slate-800">Query Score (742)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8F8F6] p-2.5 rounded border border-slate-100">
                    <span className="text-gold font-bold">2</span>
                    <span className="text-slate-800">Disburse Loan (GHS 2,500)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8F8F6] p-2.5 rounded border border-slate-100">
                    <span className="text-gold font-bold">3</span>
                    <span className="text-slate-800">Report Repayment (On-Time)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8F8F6] p-2.5 rounded border border-gold/30">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-gold font-semibold">Optimize Model Weighting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA SECTION */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#0E1629]">
            Ready to access a market you&apos;ve never been able to reach?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-light">
            Secure early api tokens and begin testing user-authorized mobile money scoring loops inside your lending software.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <button className="bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-gold-glow">
                Request API Access
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
