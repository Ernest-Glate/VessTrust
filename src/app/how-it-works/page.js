"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FactorCard from "@/components/FactorCard";
import APIBlock from "@/components/APIBlock";
import { ArrowRight, ChevronDown, CheckCircle, ShieldAlert, Cpu, Award, Smartphone } from "lucide-react";

export default function HowItWorks() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

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

  const userJourneySteps = [
    {
      num: "01",
      title: "Download VessTrust",
      description: "User downloads the lightweight mobile app or accesses the Vess interface through USSD or web portal.",
      icon: <Smartphone className="w-6 h-6 text-gold" />,
      uiMock: (
        <div className="bg-[#F8F8F6] border border-slate-200/80 p-4 rounded-xl max-w-xs w-full text-xs">
          <div className="font-semibold text-slate-800 mb-2">VessTrust Install</div>
          <div className="text-slate-500">Package Size: 4.8MB</div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="w-full bg-gold h-full" />
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Grant Single Consent",
      description: "Secure, one-tap validation screen matches the user's phone identity with their telecom registry data.",
      icon: <CheckCircle className="w-6 h-6 text-gold" />,
      uiMock: (
        <div className="bg-[#F8F8F6] border border-gold/30 p-4 rounded-xl max-w-xs w-full text-xs">
          <div className="font-semibold text-gold mb-1">Verify Identity</div>
          <p className="text-[10px] text-slate-500 leading-relaxed mb-3">
            Allow VessTrust to verify mobile money behavior traits.
          </p>
          <button className="bg-gold text-white px-3 py-1 rounded font-semibold w-full text-[10px]">I Consent</button>
        </div>
      ),
    },
    {
      num: "03",
      title: "MCP Connector Pulls Data",
      description: "Standardized protocol reads 7 behavior fields at the local telco database. Raw transaction statements never leave the carrier.",
      icon: <Cpu className="w-6 h-6 text-gold" />,
      uiMock: (
        <div className="bg-[#F8F8F6] border border-slate-200/80 p-4 rounded-xl max-w-xs w-full font-mono text-[10px] space-y-1 text-gold">
          <div>GET /connector/fields</div>
          <div className="text-slate-500">{"{"} tx_freq: 142, avg_val: 450.5 {"}"}</div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Generate Core Score",
      description: "Machine Learning models weigh payment consistency, balance trends, and volume to output a portable score in under 500ms.",
      icon: <Award className="w-6 h-6 text-gold" />,
      uiMock: (
        <div className="bg-[#F8F8F6] border border-slate-200/80 p-4 rounded-xl max-w-xs w-full text-center">
          <div className="text-2xl font-playfair font-semibold text-slate-950">742</div>
          <span className="text-[10px] text-gold tracking-wide">VESS SCORE</span>
        </div>
      ),
    },
    {
      num: "05",
      title: "Unlock Marketplace",
      description: "Secure portal matches candidate scores with pre-approved lender lists. Revoke consent or share records anytime.",
      icon: <ShieldAlert className="w-6 h-6 text-gold" />,
      uiMock: (
        <div className="bg-[#F8F8F6] border border-slate-200/80 p-3 rounded-xl max-w-xs w-full text-[10px] space-y-2">
          <div className="flex justify-between items-center text-slate-800">
            <span>Matched Lenders</span>
            <span className="bg-gold/15 text-gold px-1.5 py-0.5 rounded text-[8px] font-semibold">3 Live</span>
          </div>
          <div className="bg-white p-1.5 rounded flex justify-between border border-slate-100">
            <span className="text-slate-600">Ecobank Micro-Loan</span>
            <span className="text-gold font-semibold">GHS 5,000</span>
          </div>
        </div>
      ),
    },
  ];

  const faqs = [
    {
      q: "What is a Vess Score?",
      a: "A Vess Score is a portable, 3-digit financial integrity indicator ranging from 300 to 850. It aggregates transactional behavior (such as how consistently you pay bills, your monthly activity volume, and payment relationships) across mobile money wallets to calculate creditworthiness.",
    },
    {
      q: "How is my data protected?",
      a: "VessTrust adheres to the strict guidelines of Ghana's Data Protection Act 2012 (Act 843) and international GDPR standards. No data ingestion is initiated without your explicit digital consent, which can be fully revoked through your dashboard at any time.",
    },
    {
      q: "Does VessTrust share raw transaction logs?",
      a: "No. VessTrust does not expose transaction records, payment logs, or account history statements. Lenders only receive your final score, corresponding risk tier (e.g., A1_LOW_RISK), and standardized factor codes that explain the score calculation.",
    },
    {
      q: "Which mobile money networks are supported?",
      a: "VessTrust currently integrates directly with MTN Mobile Money, Telecel Cash, and AirtelTigo Money in Ghana, with expansion pipelines active in Kenya (Safaricom M-Pesa) and Nigeria.",
    },
    {
      q: "How long does the score query take?",
      a: "The API responses average under 500 milliseconds. Scoring occurs in real-time, allowing microfinance providers to process loan applications and disbursals synchronously within their checkout interfaces.",
    },
    {
      q: "Is VessTrust a lender?",
      a: "No. VessTrust is a neutral credit infrastructure developer. We do not issue loans, extend credit lines, or manage retail debt. We act exclusively as the verified connective layer between mobile wallet transactions and credit providers.",
    },
    {
      q: "How do I improve my Vess Score?",
      a: "Your score is based on consistent transaction habits. Paying utility or subscription bills on time, maintaining a small buffer balance rather than emptying wallets immediately, and ensuring positive repayment histories with existing micro-creditors will increase your score.",
    },
    {
      q: "Can I revoke my consent?",
      a: "Yes. Consent is entirely controlled by you. If you choose to sever connection profiles, you can revoke access credentials immediately, meaning no partner banks or lenders will be able to query your scorecard.",
    },
  ];

  return (
    <div className="relative w-full bg-[#F8F8F6] text-slate-800">
      {/* SECTION 1: HERO */}
      <section className="py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-mono text-xs font-semibold tracking-wider block mb-4"
          >
            BEHAVIOURAL DATA ARCHITECTURE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-[#0E1629]"
          >
            Simple for users. Powerful for lenders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base font-medium max-w-xl mx-auto tracking-wide"
          >
            One consent. Seven fields. A score that changes lives.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: USER JOURNEY TIMELINE */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wide block mb-2">
              USER EXPEDITION
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">The User Journey</h2>
          </div>

          <div className="relative">
            {/* Center Timeline Line (Desktop) */}
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[1px] bg-slate-200" />

            <div className="space-y-16">
              {userJourneySteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={step.num}
                    className={`flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    } relative`}
                  >
                    {/* Circle icon */}
                    <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-1 z-10 w-8 h-8 rounded-full bg-[#F8F8F6] border border-gold flex items-center justify-center shadow">
                      {step.icon}
                    </div>

                    {/* Left/Right Text Card */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-slate-200/80 p-6 rounded-xl shadow-md hover:border-gold/30 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
                        <span className="text-gold font-mono text-xs font-semibold block mb-1 relative z-10">
                          STAGE {step.num}
                        </span>
                        <h4 className="text-slate-900 text-lg font-playfair font-semibold mb-2 relative z-10">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4 font-light relative z-10">{step.description}</p>
                        <div className="flex justify-start relative z-10">{step.uiMock}</div>
                      </motion.div>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 7 FIELDS */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wide block mb-2">
              SCORING CRITERIA
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Seven fields. All we need.</h2>
          </div>

          <FactorCard />
        </div>
      </section>

      {/* SECTION 4: MCP CONNECTOR EXPLAINER */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              LNCKSYS PROTOCOL
            </span>
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#0E1629]">One protocol. Every telco.</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              Rather than attempting to move massive databases containing millions of transactions across borders, VessTrust implements the **Mobile Connector Protocol (MCP)**. Telco carriers embed a minor, secure server-side routine locally.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              When a query is initialized, the carrier&apos;s system computes the 7 key behavioral metrics locally. The raw transaction log never leaves the secure, regulated carrier node. VessTrust receives only clean, summarized indices under active client authorization.
            </p>
            <div className="border-l-2 border-gold pl-4 text-xs italic text-slate-500">
              Zero raw data exposure. Fully compliant with Bank of Ghana policies and regional data laws.
            </div>
          </div>
          <div className="w-full">
            <APIBlock type="schema" />
          </div>
        </div>
      </section>

      {/* SECTION 5: LENDER API FLOW */}
      <section className="py-24 bg-[#090f1e]/5 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              INTEGRATION ARCHITECTURE
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Lender API Flow</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {/* Step 1 */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col justify-between hover:border-gold/30 hover:shadow-md transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-gold font-mono text-xs block mb-2">01. INITIATION</span>
                <p className="text-slate-900 text-sm font-semibold mb-3">Lender Queries API</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Lender sends a score request to the endpoint using a verified user consent token generated from the app or USSD channel.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col justify-between hover:border-gold/30 hover:shadow-md transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              {/* Arrow Connector on desktop */}
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-gold bg-[#F8F8F6] rounded-full p-1 border border-slate-200">
                <ArrowRight size={18} />
              </div>
              <div className="relative z-10">
                <span className="text-gold font-mono text-xs block mb-2">02. COMPUTATION</span>
                <p className="text-slate-900 text-sm font-semibold mb-3">Scored in Under 500ms</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Vess ML models ingest the 7 anonymized fields, apply country parameters, and return the rating instantly.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col justify-between hover:border-gold/30 hover:shadow-md transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-gold font-mono text-xs block mb-2">03. DELIVERY</span>
                <p className="text-slate-900 text-sm font-semibold mb-3">Result Handshake</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Lender receives the secure response containing the 3-digit score, categorical risk tier, and positive/negative reason codes.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/for-lenders">
              <button className="bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)]">
                View API Docs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wide block mb-2">
              RESOLVING UNCERTAINTIES
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold/30 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between text-slate-800 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-playfair text-base font-semibold text-slate-800">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gold"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-xs leading-relaxed font-light border-t border-slate-100 pt-5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
