"use client";

import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", name: "1. Acceptance of Terms" },
    { id: "accounts", name: "2. Account Registration" },
    { id: "api-usage", name: "3. API Access & Usage" },
    { id: "consent-rules", name: "4. Consumer Consent Rules" },
    { id: "liability", name: "5. Limitation of Liability" },
    { id: "termination", name: "6. Termination of Access" },
    { id: "governing-law", name: "7. Governing Law" },
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#0E1629] min-h-screen py-16 md:py-24 font-inter">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Left Table of Contents */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 border-l border-slate-200 pl-6 space-y-4">
            <h4 className="font-playfair text-sm font-semibold tracking-wider text-[#0E1629] uppercase mb-4">
              Terms of Service
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
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Last Updated: July 16, 2026
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Section 1 */}
          <section id="acceptance" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">1. Acceptance of Terms</h3>
            <p>
              By accessing, integrating, or querying the VessTrust credit layer (the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a financial institution, bank, or microfinance vendor, you represent that you hold full organizational authorization to bind such entity.
            </p>
          </section>

          {/* Section 2 */}
          <section id="accounts" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">2. Account Registration</h3>
            <p>
              Lenders and developers must register a validated profile on VessTrust to acquire API keys and sandbox sandbox profiles. You represent that all details submitted (such as institutional licensing and registration coordinates) are accurate and current.
            </p>
          </section>

          {/* Section 3 */}
          <section id="api-usage" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">3. API Access & Usage</h3>
            <p>
              VessTrust grants you a limited, non-exclusive, revocable license to access our score endpoints. In doing so, you agree that you will not:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>Initiate scoring lookups without verified, active client authorization tokens.</li>
              <li>Reverse engineer scoring models, weights, or internal logic.</li>
              <li>Attempt to stress, overload, or disrupt endpoint delivery (e.g. DDOS).</li>
              <li>Expose, sell, or mirror score response payloads to unauthorized third-party platforms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="consent-rules" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">4. Consumer Consent Rules</h3>
            <p>
              Lenders are strictly required to verify consumer consent protocols before querying scorecards. You must preserve digital logs, SMS hashes, or signed authorization templates that demonstrate active client approval. VessTrust reserves the right to audit lender credentials periodically.
            </p>
          </section>

          {/* Section 5 */}
          <section id="liability" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">5. Limitation of Liability</h3>
            <p>
              VessTrust acts as a neutral credit reference layer synthesizing alternative mobile money behaviors. We do not provide credit guarantees or underwrite loan risk. VessTrust will not be held liable for loss of capital, non-performing loans (NPLs), or credit default outcomes resulting from credit decisions based on Vess scores.
            </p>
          </section>

          {/* Section 6 */}
          <section id="termination" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">6. Termination of Access</h3>
            <p>
              VessTrust reserves the absolute right to suspend API tokens or terminate account credentials immediately, without prior notification, in cases of verified policy violations, breach of client data rights, or unauthorized query behaviors.
            </p>
          </section>

          {/* Section 7 */}
          <section id="governing-law" className="space-y-3 scroll-mt-24">
            <h3 className="text-lg font-playfair font-semibold text-[#0E1629]">7. Governing Law</h3>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of Ghana. Any legal actions or disputes arising from these conditions shall be settled under the exclusive jurisdiction of the courts of Accra, Ghana.
            </p>
          </section>
        </article>

      </div>
    </div>
  );
}
