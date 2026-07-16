"use client";

import { motion } from "framer-motion";
import TimelinePhase from "@/components/TimelinePhase";

export default function About() {
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
            OUR ORIGINS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-6 max-w-4xl mx-auto leading-tight text-[#0E1629]"
          >
            Built in Accra. Built for Africa.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            VessTrust came from building inside Ghana&apos;s mobile money infrastructure and asking why all this data wasn&apos;t being used.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: FOUNDER SECTION */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Headshot / Initial Visual */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 rounded-full border-2 border-gold flex items-center justify-center bg-[#0E1629] shadow-lg">
              <span className="font-playfair text-white text-5xl font-semibold select-none">EG</span>
              {/* Abstract overlay ring */}
              <div className="absolute inset-2 border border-gold/10 rounded-full" />
            </div>
          </div>

          {/* Story Content */}
          <div className="md:col-span-8 space-y-6">
            <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block">
              FOUNDER STORY
            </span>
            <h3 className="text-[#0E1629] text-2xl font-playfair font-semibold">Ernest Glate</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              I&apos;m Ernest Glate, a software engineer and entrepreneur based in Accra, Ghana. I founded Lncksys, a registered Ghanaian software company.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              VessTrust emerged from building VessPay — our MoMo wallet for the African diaspora — and spending a year inside Ghana&apos;s mobile money infrastructure. I kept seeing the same gap: hundreds of millions of Africans with rich, credit-relevant transaction histories that no lender could access. VessTrust is the infrastructure that closes that gap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION STATEMENT */}
      <section className="py-28 bg-[#090f1e]/5 border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-spotlight-lg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span variants={fadeUp} className="text-gold font-mono text-xs font-semibold uppercase tracking-widest block">
              THE MISSION
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#0E1629] font-playfair italic text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto"
            >
              <span className="text-gradient-gold block">&ldquo;Make African mobile money behaviour count — for credit, for access, for financial dignity.&rdquo;</span>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE OPPORTUNITY */}
      <section className="py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem Stats (Left) */}
          <div className="space-y-6 bg-white border border-slate-200/80 p-8 rounded-2xl hover:border-gold/30 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
            <div className="relative z-10">
              <h4 className="text-[#0E1629] font-playfair text-xl font-semibold mb-4">The Market Realities</h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
                  <span className="text-slate-600">Unbanked Demographics</span>
                  <span className="text-gold font-mono font-semibold">493M Adults</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
                  <span className="text-slate-600">SME Financing Discrepancy</span>
                  <span className="text-gold font-mono font-semibold">$331 Billion</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
                  <span className="text-slate-600">Informal Workforce Share</span>
                  <span className="text-gold font-mono font-semibold">80% of Jobs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Statement (Right) */}
          <div className="space-y-6">
            <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block">
              INFRASTRUCTURE SOLUTIONS
            </span>
            <h3 className="text-[#0E1629] text-3xl font-playfair font-semibold">Neutral credit reference layer.</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              VessTrust sits at the intersection of carrier databases and credit institutions. We are neither a bank nor a lender. By establishing neutral credit reference indices, we build the connective tissue between telco records and loan approval desks.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Our business model focuses exclusively on facilitating reliable data pipelines, lowering credit risk parameters, and ensuring portable credit profiles are owned by the client.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: LNCKSYS & VESSPAY SECTION */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl text-center space-y-6 shadow-md hover:shadow-lg hover:border-gold/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-spotlight opacity-20 group-hover:opacity-40 pointer-events-none transition-opacity duration-300" />
            <div className="relative z-10">
              <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block">
                CORPORATE ECOSYSTEM
              </span>
              <h3 className="text-[#0E1629] text-2xl font-playfair font-semibold">Lncksys & VessPay</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto font-light">
                Lncksys is the registered Ghanaian software company behind VessTrust and VessPay. VessPay represents the diaspora wallet pipeline, moving funds across borders securely.
              </p>
              <div className="text-gold font-playfair text-lg italic py-2 max-w-xl mx-auto">
                &ldquo;VessPay moves your money. VessTrust proves you deserve to borrow it.&rdquo;
              </div>
              <div className="pt-2">
                <a
                  href="https://vesspay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-hover font-semibold transition-colors text-xs underline"
                >
                  Visit VessPay →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PAN-AFRICAN ROADMAP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              EXPANSION ROADMAP
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Pan-African Roadmap</h2>
          </div>

          <TimelinePhase />
        </div>
      </section>
    </div>
  );
}
