"use client";

import Link from "next/link";
import { Shield, Scale, Info } from "lucide-react";

export default function RegulatoryNotice() {
  return (
    <div className="bg-[#F8F8F6] text-[#0E1629] min-h-screen py-16 md:py-24 font-inter flex items-center">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        <div>
          <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2 uppercase">
            REGULATORY DISCLOSURE
          </span>
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-[#0E1629] mb-4">
            Regulatory Notice
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Published: July 16, 2026
          </p>
        </div>

        <hr className="border-slate-200" />

        <div className="bg-white border border-slate-200/60 border-l-4 border-l-gold p-6 rounded-r-xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-[#0E1629]">
            <Info className="w-5 h-5 text-gold shrink-0" />
            <h4 className="font-semibold text-sm">Regulatory Framework Compliance</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            VessTrust (a credit infrastructure layer operated by Lncksys Ltd) actively pursues Credit Reference Bureau (CRB) registration under the Bank of Ghana&apos;s Credit Reporting Act 2007 (Act 726).
          </p>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            We are designing and building our scoring connector integrations in full compliance with the statutory provisions of the **Data Protection Act 2012 (Act 843)** of the Republic of Ghana, safeguarding consumer data privacy rights at every stage of the query lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-200/80 bg-white p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Scale className="w-4 h-4 text-gold" />
            </div>
            <h5 className="font-playfair font-semibold text-[#0E1629] text-sm">Credit Reporting Act, 2007</h5>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Establishing a clear legal framework for collecting, compiling, and sharing credit information across financial networks.
            </p>
          </div>

          <div className="border border-slate-200/80 bg-white p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-gold" />
            </div>
            <h5 className="font-playfair font-semibold text-[#0E1629] text-sm">Data Protection Act, 2012</h5>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Protecting personal data and individual privacy by regulating how personal logs are parsed and processed.
            </p>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center text-xs">
          <Link href="/privacy" className="text-gold font-semibold hover:underline">
            ← Read Privacy Policy
          </Link>
          <Link href="/terms" className="text-gold font-semibold hover:underline">
            Read Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
