"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "For Lenders", path: "/for-lenders" },
    { name: "For Individuals", path: "/for-individuals" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-playfair text-2xl font-semibold tracking-wide flex items-center select-none">
          <span className="text-[#0E1629] font-medium">Vess</span>
          <span className="text-gold ml-0.5">Trust</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-mutedText"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/waitlist">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-gold-glow hover:shadow-[0_0_20px_-3px_rgba(181,148,69,0.35)]"
            >
              Join Waitlist
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0E1629] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-slate-100 transition-colors ${
                    pathname === link.path ? "text-gold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-gold hover:bg-gold-hover text-white font-semibold py-3 rounded-full text-center transition-colors">
                    Join Waitlist
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
