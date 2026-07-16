"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "233500000000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Error sending message. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const LinkedinIcon = () => (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const contactOptions = [
    {
      title: "Email Support",
      label: "support@vesstrust.com",
      link: "mailto:support@vesstrust.com",
      icon: <Mail className="w-5 h-5 text-gold" />,
    },
    {
      title: "WhatsApp Chat",
      label: "Direct Messenger Support",
      link: `https://wa.me/${whatsappNumber}`,
      icon: <MessageSquare className="w-5 h-5 text-gold" />,
    },
    {
      title: "LinkedIn",
      label: "VessTrust Credit Layer",
      link: "https://linkedin.com",
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <div className="relative w-full bg-[#F8F8F6] text-slate-800 min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-mono text-xs font-semibold tracking-wider block mb-4"
          >
            COMMUNICATION
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-[#0E1629]"
          >
            Get in touch.
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: CONTENT ROW */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl shadow-sm hover:border-gold/30 transition-all duration-300">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mb-6"
                >
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h4 className="text-slate-900 font-playfair text-xl font-semibold mb-2">Message Sent.</h4>
                <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
                  Thank you for reaching out. A client relations specialist will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {error && <div className="text-red-400 text-xs font-medium">{error}</div>}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ernest Glate"
                    className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ernest@lncksys.com"
                    className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject Query
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-200 focus:border-gold outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-colors appearance-none"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option value="" disabled className="bg-white">Select subject</option>
                    <option value="General" className="bg-white">General Enquiry</option>
                    <option value="Partnership" className="bg-white">Strategic Partnership</option>
                    <option value="Press" className="bg-white">Press & Media</option>
                    <option value="API Access" className="bg-white">Developer API Access</option>
                    <option value="Other" className="bg-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can VessTrust credit layer assist your workflow?"
                    className="w-full bg-white border border-slate-200 focus:border-gold focus:shadow-[0_0_15px_-3px_rgba(181,148,69,0.15)] outline-none text-slate-800 text-sm px-4 py-3 rounded-lg transition-all duration-300 placeholder-slate-400 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gold hover:bg-gold-hover text-white font-semibold text-sm py-3.5 rounded-full mt-4 transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  <p className="text-center text-[10px] text-slate-500 mt-3 font-light">
                    * Response promise: We answer all validated inquiries within 24 hours.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Options */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
          {contactOptions.map((opt, idx) => (
            <a
              key={idx}
              href={opt.link}
              target={opt.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50/50 border border-slate-200/80 p-6 rounded-xl flex gap-4 transition-all shadow-sm hover:shadow group"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                {opt.icon}
              </div>
              <div>
                <h5 className="text-slate-900 text-sm font-semibold mb-1 group-hover:text-gold transition-colors">
                  {opt.title}
                </h5>
                <p className="text-slate-500 text-xs font-mono">{opt.label}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
