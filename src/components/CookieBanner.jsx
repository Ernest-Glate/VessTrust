"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vesstrust-cookie-consent");
    if (!consent) {
      // Delay presentation slightly for UX
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("vesstrust-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("vesstrust-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-white border border-slate-200/80 p-6 rounded-lg shadow-2xl"
        >
          <h5 className="font-playfair text-slate-900 text-base font-semibold mb-2">Cookie Consent</h5>
          <p className="text-slate-600 text-xs leading-relaxed mb-4">
            We use cookies to improve your experience on our credit layer. By accepting, you consent to our use of tracking and performance cookies. Read our{" "}
            <a href="/privacy" className="text-gold underline hover:text-gold-hover">
              Privacy Policy
            </a>{" "}
            for details.
          </p>
          <div className="flex justify-end gap-3 text-xs">
            <button
              onClick={decline}
              className="text-slate-500 hover:text-slate-900 px-3 py-1.5 transition-colors font-medium"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="bg-gold hover:bg-gold-hover text-white px-4 py-1.5 rounded-full font-semibold transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
