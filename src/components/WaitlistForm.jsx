"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistForm() {
  // Individual Form State
  const [indForm, setIndForm] = useState({
    name: "",
    email: "",
    country: "",
    network: "",
  });
  const [indSubmitting, setIndSubmitting] = useState(false);
  const [indSuccess, setIndSuccess] = useState(false);
  const [indError, setIndError] = useState("");

  // Lender Form State
  const [lenForm, setLenForm] = useState({
    orgName: "",
    name: "",
    email: "",
    country: "",
    volume: "",
  });
  const [lenSubmitting, setLenSubmitting] = useState(false);
  const [lenSuccess, setLenSuccess] = useState(false);
  const [lenError, setLenError] = useState("");

  const handleIndSubmit = async (e) => {
    e.preventDefault();
    setIndSubmitting(true);
    setIndError("");

    if (!indForm.name || !indForm.email || !indForm.country || !indForm.network) {
      setIndError("Please fill in all fields.");
      setIndSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "individual", ...indForm }),
      });
      const data = await res.json();
      if (res.ok) {
        setIndSuccess(true);
      } else {
        setIndError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setIndError("Network error. Please try again.");
    } finally {
      setIndSubmitting(false);
    }
  };

  const handleLenSubmit = async (e) => {
    e.preventDefault();
    setLenSubmitting(true);
    setLenError("");

    if (!lenForm.orgName || !lenForm.name || !lenForm.email || !lenForm.country || !lenForm.volume) {
      setLenError("Please fill in all fields.");
      setLenSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "lender", ...lenForm }),
      });
      const data = await res.json();
      if (res.ok) {
        setLenSuccess(true);
      } else {
        setLenError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setLenError("Network error. Please try again.");
    } finally {
      setLenSubmitting(false);
    }
  };

  const countries = ["Ghana", "Nigeria", "Kenya", "Côte d'Ivoire", "Senegal", "Uganda", "Other"];
  const networks = ["MTN Mobile Money", "Telecel Cash", "AirtelTigo Money", "Safaricom M-Pesa", "Orange Money", "Wave", "Other"];
  const volumes = ["Under $10,000", "$10,000 - $50,000", "$50,000 - $250,000", "$250,000 - $1M", "Over $1M"];

  const successAnimation = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center py-12 px-6 bg-[#F8F8F6] border border-gold/20 rounded-2xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mb-6"
      >
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <h4 className="text-slate-900 font-playfair text-xl font-semibold mb-2">You&apos;re on the list.</h4>
      <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
        We&apos;ve registered your waitlist submission successfully. We&apos;ll be in touch soon.
      </p>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
      {/* Individual Form Card */}
      <div className="bg-white border border-slate-200/80 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(181,148,69,0.05)] transition-all duration-500 p-8 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-spotlight opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10">
          <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
            Build Your Credit
          </span>
          <h3 className="text-slate-900 text-2xl font-playfair font-semibold mb-2">For Individuals</h3>
          <p className="text-slate-500 text-xs leading-relaxed mb-8">
            Connect your mobile money account, prove your transaction history, and export your Vess score to verified lenders.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {indSuccess ? (
            successAnimation
          ) : (
            <motion.form
              key="ind-form"
              onSubmit={handleIndSubmit}
              className="space-y-4 relative z-10"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {indError && <div className="text-red-400 text-xs font-medium">{indError}</div>}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Abena Mansa"
                  className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                  value={indForm.name}
                  onChange={(e) => setIndForm({ ...indForm, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="abena@market.com"
                  className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                  value={indForm.email}
                  onChange={(e) => setIndForm({ ...indForm, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Country
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-200 focus:border-gold outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-colors appearance-none"
                    value={indForm.country}
                    onChange={(e) => setIndForm({ ...indForm, country: e.target.value })}
                  >
                    <option value="" disabled className="bg-white">Select</option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="bg-white">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Network
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-200 focus:border-gold outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-colors appearance-none"
                    value={indForm.network}
                    onChange={(e) => setIndForm({ ...indForm, network: e.target.value })}
                  >
                    <option value="" disabled className="bg-white">Select</option>
                    {networks.map((n) => (
                      <option key={n} value={n} className="bg-white">{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={indSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gold hover:bg-gold-hover text-white font-semibold text-sm py-3.5 rounded-full mt-6 transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)] disabled:opacity-50"
              >
                {indSubmitting ? "Joining..." : "Join Individual Waitlist"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Lender Form Card */}
      <div className="bg-white border border-slate-200/80 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(181,148,69,0.05)] transition-all duration-500 p-8 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-spotlight opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10">
          <span className="text-gold font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
            Access New Markets
          </span>
          <h3 className="text-slate-900 text-2xl font-playfair font-semibold mb-2">For Lenders</h3>
          <p className="text-slate-500 text-xs leading-relaxed mb-8">
            Access BOG-compliant credit risk signals and behavior analytics to score the 493M unscoreable population instantly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {lenSuccess ? (
            successAnimation
          ) : (
            <motion.form
              key="len-form"
              onSubmit={handleLenSubmit}
              className="space-y-4 relative z-10"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {lenError && <div className="text-red-400 text-xs font-medium">{lenError}</div>}

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Organisation Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ecobank Ltd"
                    className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                    value={lenForm.orgName}
                    onChange={(e) => setLenForm({ ...lenForm, orgName: e.target.value })}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kofi Appiah"
                    className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                    value={lenForm.name}
                    onChange={(e) => setLenForm({ ...lenForm, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="kofi.appiah@ecobank.com"
                  className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                  value={lenForm.email}
                  onChange={(e) => setLenForm({ ...lenForm, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Country
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-200 focus:border-gold outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-colors appearance-none"
                    value={lenForm.country}
                    onChange={(e) => setLenForm({ ...lenForm, country: e.target.value })}
                  >
                    <option value="" disabled className="bg-white">Select</option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="bg-white">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Monthly Volume
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-200 focus:border-gold outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-colors appearance-none"
                    value={lenForm.volume}
                    onChange={(e) => setLenForm({ ...lenForm, volume: e.target.value })}
                  >
                    <option value="" disabled className="bg-white">Select</option>
                    {volumes.map((v) => (
                      <option key={v} value={v} className="bg-white">{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={lenSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gold hover:bg-gold-hover text-white font-semibold text-sm py-3.5 rounded-full mt-6 transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)] disabled:opacity-50"
              >
                {lenSubmitting ? "Submitting..." : "Request Lender Access"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
