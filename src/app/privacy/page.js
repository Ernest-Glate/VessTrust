"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", name: "1. Introduction" },
    { id: "data-collection", name: "2. Data Ingestion & Inquiries" },
    { id: "connector-protocol", name: "3. Mobile Connector Protocol (MCP)" },
    { id: "user-consent", name: "4. Consent Management & Revocation" },
    { id: "data-security", name: "5. Information Security" },
    { id: "user-rights", name: "6. Your Legal Rights" },
    { id: "contact", name: "7. Contact Compliance" },
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#0E1629] min-h-screen py-16 md:py-24 font-inter">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Left Table of Contents */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 border-l border-slate-200 pl-6 space-y-4">
            <h4 className="font-playfair text-sm font-semibold tracking-wider text-[#0E1629] uppercase mb-4">
              Privacy Policy
            </h4>
            <nav className="flex flex-col space-y-3 text-xs font-medium text-slate-500">
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  {sec.name}
                </Link>
              ))}
            </nav>
            <div className="pt-6">
              <Link
                href="/regulatory"
                className="text-xs text-gold font-semibold hover:underline"
              >
                Regulatory compliance notice →
              </Link>
            </div>
          </div>
        </aside>

        {/* Legal Text (Right Column) */}
        <article className="lg:col-span-8 space-y-10 text-slate-700 text-sm leading-relaxed max-w-prose">
          <div>
            <span className="text-gold font-mono text-xs font-semibold tracking-wider block mb-2 uppercase">
              LEGAL DOCUMENTATION
            </span>
            <h1 className="text-3xl font-playfair font-semibold text-[#0E1629] mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Last Updated: July 16, 2026
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Intro */}
          <section id="introduction" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">1. Introduction</h3>
            <p>
              VessTrust (a credit infrastructure layer operated by Lncksys Ltd) is committed to protecting the privacy, confidentiality, and integrity of consumer transaction data. This Privacy Policy details how we access, synthesize, and report mobile money behavior metrics to certified credit providers.
            </p>
            <p>
              We operate exclusively as a credit reference layer. We do not maintain historical logs of raw consumer transactions or bank statements. Our operations comply fully with the Data Protection Act 2012 (Act 843) of the Republic of Ghana.
            </p>
          </section>

          {/* Ingestion */}
          <section id="data-collection" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">2. Data Ingestion & Inquiries</h3>
            <p>
              VessTrust does not pull raw statements or transaction logs out of carrier carrier nodes. Our systems query only synthesized, anonymized indexes.
            </p>
            <p>
              Data parameters read through queries include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>Transaction frequency and cycles</li>
              <li>Average monthly transaction volume index</li>
              <li>Wallet retention ratios</li>
              <li>Counterparty relationship diversity indices</li>
              <li>Utility payment consistency logs</li>
              <li>Micro-credit payment flags</li>
            </ul>
          </section>

          {/* MCP */}
          <section id="connector-protocol" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">3. Mobile Connector Protocol (MCP)</h3>
            <p>
              To safeguard security, VessTrust uses the Mobile Connector Protocol (MCP). The connector scripts execute locally on carrier networks. When a credit score inquiry is sent, it is analyzed in place behind the carrier&apos;s firewall. The response payload returns only standardized integers and indicators, ensuring raw logs are never exposed.
            </p>
          </section>

          {/* Consent */}
          <section id="user-consent" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">4. Consent Management & Revocation</h3>
            <p>
              Queries are only executed under active, explicit consumer consent. Consumers grant query authorization via SMS, USSD, or VessTrust app consent panels. You maintain the absolute right to revoke this consent at any time. Revocation breaks integration tokens, preventing further queries.
            </p>
          </section>

          {/* Security */}
          <section id="data-security" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">5. Information Security</h3>
            <p>
              All communication channels are encrypted using SSL/TLS protocols. API requests are authenticated using AES-256 tokens. We perform regular third-party audits to identify threat vectors and secure data transfer pipelines.
            </p>
          </section>

          {/* Rights */}
          <section id="user-rights" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">6. Your Legal Rights</h3>
            <p>
              In compliance with Ghana&apos;s Data Protection Act 2012, you possess the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>Request details regarding any score inquiries run on your profile</li>
              <li>Dispute ratings or metrics, with resolution guaranteed within 21 days</li>
              <li>Withdraw authorization for third-party lookups</li>
              <li>Request erasure of archived query tokens and score identifiers</li>
            </ul>
          </section>

          {/* Contact */}
          <section id="contact" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">7. Contact Compliance</h3>
            <p>
              For privacy disputes, compliance checks, or requests regarding data rights, contact our Data Protection Officer:
            </p>
            <p className="font-mono text-xs">
              Email: compliance@vesstrust.com <br />
              Lncksys Headquarters, Accra, Ghana
            </p>
          </section>
        </article>

      </div>
    </div>
  );
}
