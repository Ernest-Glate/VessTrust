"use client";

import { motion } from "framer-motion";
import PersonaPanel from "@/components/PersonaPanel";
import { Shield, Sparkles, Key, Scale, ArrowDown, Lock, CheckCircle2 } from "lucide-react";

export default function ForIndividuals() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const trustPillars = [
    {
      title: "Data never leaves your telco raw",
      desc: "Our Mobile Connector Protocol parses data locally inside the carrier&apos;s firewall. Raw statements are never moved, sold, or aggregated on external servers.",
      icon: <Lock className="w-5 h-5 text-gold" />,
    },
    {
      title: "Consent revocable at any time",
      desc: "You control active access keys. Revoke permission instantly through the dashboard to cut off third-party scoring queries.",
      icon: <Key className="w-5 h-5 text-gold" />,
    },
    {
      title: "Disputes resolved in 21 days",
      desc: "If you detect discrepancies in your mobile wallet registry metrics, our compliance officers reconcile data values with carrier partners within 21 days.",
      icon: <Scale className="w-5 h-5 text-gold" />,
    },
    {
      title: "BOG Compliance framework",
      desc: "Built to fit Bank of Ghana regulations, maintaining strict adherence to credit disclosure laws and privacy rules.",
      icon: <Shield className="w-5 h-5 text-gold" />,
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
            PORTABLE FINANCIAL PROFILES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-6 max-w-4xl mx-auto leading-tight text-[#0E1629]"
          >
            Your financial life has always been creditworthy. Now it can prove it.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            VessTrust reads your mobile money behaviour and turns it into a credit score that opens doors banks have always kept closed.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: THREE PERSONA SECTIONS */}
      <PersonaPanel />

      {/* SECTION 3: APP PREVIEW SECTION */}
      <section className="py-24 border-b border-slate-200/80 relative">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-spotlight opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Mock App Screen */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border-8 border-slate-200/60 p-5 rounded-[40px] w-full max-w-xs shadow-2xl h-[580px] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Camera Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-200 rounded-full" />
              
              <div className="space-y-6 pt-4">
                {/* Header */}
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>VessTrust Mobile</span>
                  <span>100% Secure</span>
                </div>
 
                {/* Score visualizer */}
                <div className="bg-[#F8F8F6] p-6 rounded-2xl border border-slate-200/80 text-center relative group">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider block">YOUR VESS SCORE</span>
                  <span className="text-3xl font-playfair font-semibold text-slate-900 mt-1 block">742</span>
                  <span className="text-[9px] bg-gold/10 text-gold px-2 py-0.5 rounded-full inline-block mt-2 font-semibold">Good Standing</span>
                  {/* Small Trend line mock */}
                  <div className="h-6 w-24 mx-auto mt-3 overflow-hidden flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 100 30">
                      <path d="M0,25 Q20,10 40,20 T80,5 T100,2" fill="none" stroke="#DFB54C" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
 
                {/* Action Cards */}
                <div className="space-y-2">
                  <div className="bg-white border border-slate-200/80 p-3 rounded-xl flex items-center justify-between text-[10px] shadow-sm">
                    <div>
                      <span className="text-slate-800 font-medium block">Connected Wallets</span>
                      <span className="text-slate-500">MTN MoMo, Telecel Cash</span>
                    </div>
                    <span className="text-gold font-bold">2 Active</span>
                  </div>
 
                  <div className="bg-white border border-slate-200/80 p-3 rounded-xl flex items-center justify-between text-[10px] shadow-sm">
                    <div>
                      <span className="text-slate-800 font-medium block">Matched Loan Offers</span>
                      <span className="text-slate-500">Based on 742 rating</span>
                    </div>
                    <span className="text-gold font-bold">3 Deals</span>
                  </div>
 
                  <div className="bg-white border border-slate-200/80 p-3 rounded-xl flex items-center justify-between text-[10px] shadow-sm">
                    <div>
                      <span className="text-slate-800 font-medium block">Consent Sharing</span>
                      <span className="text-slate-500">Active tokens managed</span>
                    </div>
                    <span className="text-gold font-bold">Manage</span>
                  </div>
                </div>
              </div>
 
              {/* Bottom Nav bar mock */}
              <div className="flex justify-around items-center border-t border-slate-100 pt-3 text-[9px] text-slate-500">
                <span className="text-gold">Home</span>
                <span>Offers</span>
                <span>Security</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature descriptions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
                APP FEATURES
              </span>
              <h3 className="text-slate-900 text-3xl font-playfair font-semibold mb-6">
                See your score. Understand it. Improve it.
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="text-slate-900 text-base font-playfair font-semibold mb-1">Plain language explanations</h5>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    No complex financial jargon. We break down the factors influencing your score (e.g. consistent bill payments or transaction volumes) so you know exactly how to improve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="text-slate-900 text-base font-playfair font-semibold mb-1">Lender marketplace matched to your score</h5>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    Browse pre-qualified financial options tailored to your specific rating tier. Apply directly without triggering negative scoring events from bulk applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Key className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="text-slate-900 text-base font-playfair font-semibold mb-1">Consent you control, revoke anytime</h5>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    You decide who queries your record. Authorization parameters are managed entirely by you, allowing you to revoke access keys immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO GET STARTED */}
      <section className="py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-spotlight opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              USER ONBOARDING
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">
              <span className="text-gradient">How to Get Started</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center bg-[#F8F8F6] p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-gold font-playfair text-3xl font-semibold mb-4 block">1</span>
                <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2">Download the App</h5>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Install VessTrust on your smartphone or access via standard USSD portals.
                </p>
              </div>
            </div>
            <div className="text-center bg-[#F8F8F6] p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-gold font-playfair text-3xl font-semibold mb-4 block">2</span>
                <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2">Connect MoMo accounts</h5>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Authenticate your phone number to securely link transactional behaviors.
                </p>
              </div>
            </div>
            <div className="text-center bg-[#F8F8F6] p-8 rounded-xl border border-slate-200/80 hover:border-gold/30 transition-all duration-300 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-gold font-playfair text-3xl font-semibold mb-4 block">3</span>
                <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2">See your score</h5>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Receive your validated credit rating in 30 seconds, completely free.
                </p>
              </div>
            </div>
          </div>

          {/* Disabled download store buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="relative group select-none">
              <div className="bg-white border border-slate-200 opacity-60 text-slate-800 px-6 py-3 rounded-xl flex items-center gap-3 cursor-not-allowed">
                <ArrowDown size={18} className="text-gold" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Download on the</span>
                  <span className="text-xs font-semibold block">App Store</span>
                </div>
              </div>
              <span className="absolute -top-2.5 -right-2 bg-gold text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            <div className="relative group select-none">
              <div className="bg-white border border-slate-200 opacity-60 text-slate-800 px-6 py-3 rounded-xl flex items-center gap-3 cursor-not-allowed">
                <ArrowDown size={18} className="text-gold" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Get it on</span>
                  <span className="text-xs font-semibold block">Google Play</span>
                </div>
              </div>
              <span className="absolute -top-2.5 -right-2 bg-gold text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST SECTION */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-spotlight opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2">
              DATA INTEGRITY
            </span>
            <h2 className="text-3xl font-playfair font-semibold text-[#0E1629]">
              <span className="text-gradient">Your data. Your control.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-xl flex gap-4 hover:border-gold/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-spotlight opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 relative z-10">
                  {pillar.icon}
                </div>
                <div className="relative z-10">
                  <h5 className="text-slate-900 text-base font-playfair font-semibold mb-2">{pillar.title}</h5>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
