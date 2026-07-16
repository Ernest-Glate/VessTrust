"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScoreDial from "@/components/ScoreDial";
import MarqueeBand from "@/components/MarqueeBand";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  // Global fade-up animation configurations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#F8F8F6] text-[#0E1629]">
      {/* Global dot grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="min-h-[90vh] flex items-center py-20 md:py-28 relative">
        {/* Glow spotlight behind the hero content */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spotlight-lg opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative z-10">
          {/* Left Column: Headline and CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.span
              variants={fadeUp}
              className="text-gold font-mono text-xs font-semibold tracking-widest uppercase mb-4"
            >
              PAN-AFRICAN CREDIT INFRASTRUCTURE
            </motion.span>
            
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-playfair font-semibold leading-[1.1] mb-6 text-[#0E1629] max-w-2xl"
            >
              <span className="text-gradient block">Your financial behaviour.</span>
              <span className="relative inline-block mt-2">
                <span className="text-gradient-gold">Finally counts.</span>
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold/50" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
            >
              VessTrust converts mobile money transaction history into a portable credit score — for anyone, anywhere mobile money is live in Africa.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/waitlist" className="w-full sm:w-auto text-center">
                <button className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)] text-sm shadow-md">
                  Join the Waitlist
                </button>
              </Link>
              <Link href="/how-it-works" className="w-full sm:w-auto text-center">
                <button className="w-full sm:w-auto border border-slate-300 hover:border-gold hover:text-gold text-slate-600 font-medium px-8 py-3.5 rounded-full transition-all text-sm backdrop-blur-sm bg-white/40">
                  How It Works
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Score Gauge with background spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center w-full relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-spotlight opacity-95 pointer-events-none" />
            <div className="w-full max-w-sm relative z-10">
              <ScoreDial />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE TRUST BAND */}
      <MarqueeBand />

      {/* SECTION 3: PROBLEM SECTION */}
      <section className="py-24 border-b border-slate-200/80 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-spotlight opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-playfair font-semibold text-[#0E1629]"
            >
              <span className="text-gradient">Creditworthy. But invisible.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light"
            >
              A market trader who has sent MoMo payments to 20 suppliers every week for six years, pays her bills on time, and saves consistently — cannot get a GHS 500 loan. Not because she&apos;s not creditworthy. Because her financial life is invisible to every bank on the continent.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="py-8 px-4 md:px-8 border-y border-slate-200/80 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
            >
              <p className="text-gold font-playfair italic text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                &ldquo;VessTrust converts behaviour into verification. We make the informal sector&apos;s transaction history portable.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/how-it-works" className="text-gold hover:text-gold-hover font-semibold transition-colors text-sm inline-flex items-center gap-1.5 group select-none">
                See how VessTrust fixes this
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (OVERVIEW) */}
      <section className="py-24 border-b border-slate-200/80 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-spotlight opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              THE WORKFLOW
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">
              <span className="text-gradient">How it works</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-white p-8 rounded-xl border border-slate-200/80 border-t-2 border-t-gold shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold font-playfair text-3xl font-semibold mb-4">01</div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">Connect</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Users connect their mobile money accounts with a single consent tap.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-white p-8 rounded-xl border border-slate-200/80 border-t-2 border-t-gold shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold font-playfair text-3xl font-semibold mb-4">02</div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">Score</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  VessTrust&apos;s ML engine converts 7 behavioural fields into a credit score in under 500 milliseconds.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeUp}
              className="bg-white p-8 rounded-xl border border-slate-200/80 border-t-2 border-t-gold shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold font-playfair text-3xl font-semibold mb-4">03</div>
                <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-3">Unlock</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Users access loans, trade finance, and financial products they were previously invisible to.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: WHO IT'S FOR */}
      <section className="py-24 border-b border-slate-200/80 relative">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Panel 1: For Individuals */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200/80 hover:border-gold/30 hover:shadow-lg transition-all duration-500 p-10 rounded-2xl flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.02)] group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-2xl font-playfair font-semibold mb-4 group-hover:text-gold transition-colors">Build your financial identity</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">
                Take control of your mobile money behaviour. Connect your MoMo wallet securely, check your Vess Score for free, and prove your creditworthiness to lenders instantly.
              </p>
            </div>
            <Link href="/for-individuals" className="text-gold hover:text-gold-hover font-semibold transition-colors text-sm flex items-center gap-1 group">
              See your score
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
          {/* Panel 2: For Lenders */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200/80 hover:border-gold/30 hover:shadow-lg transition-all duration-500 p-10 rounded-2xl flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.02)] group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-2xl font-playfair font-semibold mb-4 group-hover:text-gold transition-colors">Score the unscored</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">
                Tap into a massive pre-verified market. Integrate our lightweight, BOG-compliant API connectors to access real-time behavioural scores and lower NPL rates.
              </p>
            </div>
            <Link href="/for-lenders" className="text-gold hover:text-gold-hover font-semibold transition-colors text-sm flex items-center gap-1 group">
              View the API
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: STATS SECTION */}
      <section className="py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-spotlight opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCounter targetValue={493} suffix="M+" label="unbanked adults in Africa" />
            <StatCounter targetValue={331} prefix="$" suffix="B" label="SME financing gap" />
            <StatCounter targetValue={500} suffix="ms" label="API response time" />
            <StatCounter targetValue={7} label="behavioural fields scored" />
          </div>
        </div>
      </section>

      {/* SECTION 7: PROOF SECTION */}
      <section className="py-24 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              MARKET VIABILITY
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">
              <span className="text-gradient">This model is proven</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {/* Card 1: M-Shwari */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold text-2xl font-playfair font-semibold mb-3">$277M+</div>
                <p className="text-slate-900 text-sm font-semibold mb-2">M-Shwari Disbursed</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Proving that micro-lending linked directly to mobile transaction data drives massive scale with default rates under 2%.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Tala */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold text-2xl font-playfair font-semibold mb-3">$4B+</div>
                <p className="text-slate-900 text-sm font-semibold mb-2">Disbursed Globally</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Demonstrating that alternative data scoring supports repayment rates exceeding 95% in informal, unbanked demographics.
                </p>
              </div>
            </motion.div>

            {/* Card 3: FairMoney */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold text-2xl font-playfair font-semibold mb-3">CBN Licensed</div>
                <p className="text-slate-900 text-sm font-semibold mb-2">Institutional Compliance</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Confirming that alternative scoring frameworks integrate cleanly into national banking regulatory policies.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <p className="text-center text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
            * VessTrust is not affiliated with M-Shwari, Tala, or FairMoney. These benchmarks are referenced exclusively as industry proof of model viability.
          </p>
        </div>
      </section>

      {/* SECTION 8: CTA SECTION */}
      <section className="py-28 bg-[#FAF9F5] border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-spotlight-lg opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-playfair font-semibold text-gold"
            >
              <span className="text-gradient-gold block">The credit layer Africa has been waiting for.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed font-light"
            >
              VessTrust is building now. Sign up to get early developer keys or first access to your personal score.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-6">
              <Link href="/waitlist">
                <button className="bg-gold hover:bg-gold-hover text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_25px_-3px_rgba(181,148,69,0.4)] text-sm shadow-lg">
                  Join the Waitlist
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
