"use client";

import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";

export default function Waitlist() {
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

  const nextSteps = [
    {
      num: "01",
      title: "Submission Review",
      desc: "Our engineering and compliance teams verify waitlist applicants to align with regulatory standards.",
    },
    {
      num: "02",
      title: "Onboarding Outreach",
      desc: "We connect directly with approved candidates to distribute sandbox API tokens or private consumer dashboard invites.",
    },
    {
      num: "03",
      title: "Access Verification",
      desc: "Begin testing transaction behavior score triggers or query your live personal score instantly.",
    },
  ];

  return (
    <div className="relative w-full bg-navy-dark text-slate-800 min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-mono text-xs font-semibold tracking-wider block mb-4"
          >
            JOIN LNCKSYS SYSTEM
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-6 max-w-4xl mx-auto leading-tight text-[#0E1629]"
          >
            VessTrust is building. Be first.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Join the waitlist &mdash; whether you&apos;re an individual who wants to see your score, or a lender who wants to access a market you&apos;ve never been able to reach.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: DUAL FORM */}
      <section className="py-20 border-b border-slate-200/80">
        <WaitlistForm />
      </section>

      {/* SECTION 3: WHAT HAPPENS NEXT */}
      <section className="py-24 bg-[#090f1e]/5 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              POST-SUBMISSION
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">What happens next?</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {nextSteps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-md text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-gold font-playfair text-2xl font-semibold mb-3">{step.num}</div>
                <h5 className="text-[#0E1629] text-base font-playfair font-semibold mb-2">{step.title}</h5>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
