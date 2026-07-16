VESSTRUST WEBSITE BUILD PROMPT:


You are building the official website for VessTrust — a pan-African financial identity and credit layer that converts mobile money transaction history into a portable credit score for the 493 million unbanked adults across Africa. The tech stack is Next.js 14 (App Router) + Tailwind CSS + Framer Motion. Deploy-ready for Vercel. All code goes into a single GitHub repository named vesstrust-web.

BRAND IDENTITY
Name: VessTrust
Tagline: Your financial identity. Proven by your behaviour.
Sub-tagline: The credit layer Africa has been waiting for.
Colours: Deep navy #0A1628 (primary background), gold #C9A84C (accent), white #FFFFFF (text), soft navy #112240 (card backgrounds), muted #8892A4 (secondary text)
Typography: Playfair Display for headlines (import from Google Fonts), Inter for body text
Feel: Premium, trustworthy, pan-African, institutional — not a startup app, an infrastructure company. Think Experian meets Stripe meets Africa.
No kente patterns, no decorative African motifs. Clean, modern, confident.

GLOBAL RULES

Mobile-first responsive on every page
All sections animate on scroll using Framer Motion whileInView with viewport={{ once: true }}
Entrance animations: fade-up y: 40 to y: 0, opacity 0 to 1, duration 0.6s
Staggered children: staggerChildren: 0.12
Smooth scroll behaviour globally
Sticky navbar with backdrop blur on scroll
No kente dividers, no decorative patterns
WhatsApp chat button fixed bottom right: https://wa.me/[phone]
Google Analytics 4 ready — add gtag placeholder
Meta tags and OG tags on every page
Cookie consent banner
All CTAs link to /waitlist or the waitlist form
No stock photography — use abstract geometric shapes, score visualisations, and data-inspired graphics only


NAVBAR
Logo: "VessTrust" wordmark in white, "Trust" in gold. Sticky. Links: How It Works, For Lenders, For Individuals, About, Contact. CTA button: "Join Waitlist" — gold background, navy text, rounded-full. On mobile: hamburger menu with slide-down drawer. Backdrop blur activates on scroll past 50px.

PAGE 1 — HOMEPAGE (/)
Hero Section: Full viewport. Dark navy background. Left side: small gold label "PAN-AFRICAN CREDIT INFRASTRUCTURE". Large Playfair Display headline: "Your financial behaviour. Finally counts." Gold underline on "Finally counts." Subtext: "VessTrust converts mobile money transaction history into a portable credit score — for anyone, anywhere mobile money is live in Africa." Two CTAs side by side: "Join the Waitlist" (gold, filled) and "How It Works" (outlined, white). Right side: animated score visualisation — a large circular score dial in gold showing a score of 742, with animated tick counting up from 300 to 742 on page load. Below the dial, three small badges: "MTN Connected ✓", "Airtel Connected ✓", "Vodafone Connected ✓" appearing with staggered fade-in.
Trust Bar: Continuous horizontal marquee strip. Gold text on navy. Content: "493M unbanked adults in Africa ✦ $331B SME financing gap ✦ One API call ✦ 7 behavioural fields ✦ Real-time scoring ✦ Pan-African ✦ BOG compliant ✦". Framer Motion infinite scroll loop.
Problem Section: Dark section. Large centered headline: "Creditworthy. But invisible." Body: "A market trader who has sent MoMo payments to 20 suppliers every week for six years, pays her bills on time, and saves consistently — cannot get a GHS 500 loan. Not because she's not creditworthy. Because her financial life is invisible to every bank on the continent." Pull quote styled in large italic Playfair Display in gold. CTA: "See how VessTrust fixes this →"
How It Works (Overview): Three steps in a horizontal card layout with staggered entrance. Each card: large gold number, bold headline, short description. Step 1: "Connect" — "Users connect their mobile money accounts with a single consent tap." Step 2: "Score" — "VessTrust's ML engine converts 7 behavioural fields into a credit score in under 500 milliseconds." Step 3: "Unlock" — "Users access loans, trade finance, and financial products they were previously invisible to." Each card has a subtle gold top border.
Who It's For: Two large side-by-side panels. Panel 1 (For Individuals): dark navy card, gold icon, headline "Build your financial identity", description, CTA "See your score →". Panel 2 (For Lenders): soft navy card, gold icon, headline "Score the unscored", description, CTA "View the API →". Both animate in from opposite sides on scroll.
Stats Section: Full-width dark section. Four animated counting stats. Each stat counts up from zero when entering viewport: "493M+" unbanked adults, "$331B" SME financing gap, "500ms" API response time, "7" behavioural fields scored. Labels below each in muted text. Gold numbers, white labels.
Proof Section: Headline "This model is proven." Three cards referencing real-world precedents: M-Shwari ($277M disbursed, 2% NPL), Tala ($4B+ globally, 95% repayment), FairMoney (licensed by CBN). Style: dark cards, gold stat, white description. Small disclaimer: "VessTrust is not affiliated with these companies. Referenced as proof of model viability."
CTA Section: Full-width navy section. Large Playfair Display headline in gold: "The credit layer Africa has been waiting for." Subtext: "VessTrust is building now. Be first." Email input + "Join Waitlist" button. Framer Motion fade-up entrance.
Footer: VessTrust logo. Four columns: Product (How It Works, For Lenders, For Individuals), Company (About, Contact, GitHub), Legal (Privacy Policy, Terms, Regulatory Notice), Connect (Twitter/X, LinkedIn, WhatsApp). Copyright line. Small regulatory disclaimer.

PAGE 2 — HOW IT WORKS (/how-it-works)
Hero: Dark navy. Headline: "Simple for users. Powerful for lenders." Gold subline: "One consent. Seven fields. A score that changes lives."
User Journey: Vertical timeline, alternating left-right on desktop, stacked on mobile. Five stages, each with an icon, headline, description, and a small illustrated UI element: Download app → Grant consent per telco → MCP connector pulls 7 fields → Score generated in 500ms → Dashboard shows score + lenders. Each stage slides in from its respective side on scroll.
The 7 Fields: Section headline "Seven fields. All we need." Seven cards in a 4+3 grid layout. Each card: field name in gold monospace font, plain English description below. Fields: tx_frequency, avg_tx_value, balance_retention, counterparty_count, bill_consistency, loan_repayment, airtime_regularity. Cards have subtle gold border on hover with scale(1.02) Framer Motion whileHover.
MCP Connector Explainer: Headline "One protocol. Every telco." Two columns. Left: plain language explanation of the connector approach — telco implements small standardised code, data never leaves the telco raw, user consent controls everything. Right: a styled code block showing the seven-field JSON response schema in gold-on-dark-navy monospace styling. Animate code block in with a typewriter effect.
Lender API Flow: Three steps in horizontal cards: "Lender queries API with consent token" → "VessTrust scores in under 500ms" → "Lender receives score + risk tier + factor codes". Arrow connectors between cards. CTA: "View API Docs →" (links to /for-lenders).
FAQ Accordion: Eight questions with Framer Motion smooth expand/collapse. Same questions as defined in the PRD.

PAGE 3 — FOR LENDERS (/for-lenders)
Hero: Headline "Score the 493 million they said were unscoreable." Subtext: "One API integration. Real-time credit scores. A market you currently cannot access at all." CTA: "Request API Access"
Value Proposition: Three large stat cards: "60%+ of applicants return 'no data' from traditional bureaus", "500ms average score response time", "7 behavioural fields proven to predict repayment". Staggered fade-up.
API Endpoint Preview: Styled API request/response block in dark code box. Gold syntax highlighting. Shows POST /v1/score/query with request body and response showing score, risk_tier, factor_codes, data_freshness, score_id. Animate in with line-by-line reveal on scroll.
Integration Steps: Four numbered steps: Sign up for API access → Receive sandbox credentials → Integrate in days not months → Go live with real scores. Horizontal on desktop, vertical on mobile.
Pricing Tiers: Three cards. Starter (free, 100 queries/month, sandbox access), Growth ($0.50/query, webhooks, enhanced reports), Enterprise (custom pricing, dedicated support, white-label options). Cards animate in with stagger. Gold border on Growth card as recommended tier.
Outcome Reporting Section: Headline "The model improves with every loan you make." Explanation of the /outcome/report endpoint — lenders who report repayment outcomes get progressively smarter scores and discounted per-query pricing. Visual showing feedback loop: Score → Loan Decision → Outcome Reported → Better Score.
CTA: Full-width section. "Ready to access a market you've never been able to reach?" Button: "Request API Access" linking to /contact.

PAGE 4 — FOR INDIVIDUALS (/for-individuals)
Hero: Headline "Your financial life has always been creditworthy. Now it can prove it." Subtext: "VessTrust reads your mobile money behaviour and turns it into a credit score that opens doors banks have always kept closed."
Three Persona Sections: Stacked full-width panels, alternating navy and soft-navy backgrounds, each with illustrated abstract graphic on one side. Panel 1: Market Trader — "Abena has been trading for 6 years. Her MoMo history proves it." Panel 2: Diaspora Professional — "Kwame's UK financial behaviour finally counts back home." Panel 3: Rural Farmer — "Aminata's seasonal payment patterns unlock pre-harvest financing." Each panel slides in from alternating sides.
App Preview Section: Headline "See your score. Understand it. Improve it." Mock phone screen showing the score dashboard — large gold score number 742, risk tier badge "Good Standing", trend sparkline, three action cards. Scroll-triggered reveal. Beside it: three feature callouts: "Plain language explanations", "Lender marketplace matched to your score", "Consent you control — revoke anytime".
How to Get Started: Three steps. Download the VessTrust app → Connect your MoMo accounts → See your score in 30 seconds. CTA: "Download the App" (App Store + Google Play buttons, both disabled with "Coming Soon" badge).
Trust Section: Headline "Your data. Your control." Four trust pillars in a 2x2 grid: Data never leaves your telco raw, Consent revocable at any time, Disputes resolved in 21 days, BOG compliance framework. Each with a gold shield-style icon.

PAGE 5 — ABOUT (/about)
Hero: Headline "Built in Accra. Built for Africa." Subtext: "VessTrust came from building inside Ghana's mobile money infrastructure and asking why all this data wasn't being used."
Founder Section: Left — Ernest Glate headshot placeholder (gold circular frame with initials "EG" if no photo). Right — founder story: "I'm Ernest Glate, a software engineer and entrepreneur based in Accra, Ghana. I founded Lncksys, a registered Ghanaian software company. VessTrust emerged from building VessPay — our MoMo wallet for the African diaspora — and spending a year inside Ghana's mobile money infrastructure. I kept seeing the same gap: hundreds of millions of Africans with rich, credit-relevant transaction histories that no lender could access. VessTrust is the infrastructure that closes that gap."
Mission Statement: Full-width dark section. Large centered Playfair Display in gold: "Make African mobile money behaviour count — for credit, for access, for financial dignity."
The Opportunity: Two-column layout. Left: problem stats (493M unbanked, $331B gap, 80% of African jobs in SMEs). Right: solution statement — VessTrust as the neutral infrastructure layer, neither a bank nor a lender, the connective tissue between telco data and credit access.
Lncksys Section: Brief card explaining Lncksys as the parent company and VessPay as the sibling product. "VessPay moves your money. VessTrust proves you deserve to borrow it." Links to vesspay.vercel.app.
Pan-African Roadmap: Timeline with four phases. Phase 1 — Ghana. Phase 2 — Nigeria + Kenya. Phase 3 — 5 countries. Phase 4 — Pan-African. Each phase animated in with a gold line drawing across the timeline on scroll. Country flags displayed for each phase.

PAGE 6 — WAITLIST (/waitlist)
Hero: Headline "VessTrust is building. Be first." Subtext: "Join the waitlist — whether you're an individual who wants to see your score, or a lender who wants to access a market you've never been able to reach."
Two-column form section. Left column: Individual waitlist — Name, Email, Country, Mobile Network (dropdown: MTN, Airtel, Vodafone, Other). Right column: Lender waitlist — Organisation Name, Name, Email, Country, Monthly Loan Volume (dropdown). Both forms submit to a simple API route that sends data to a Google Sheet or Airtable via webhook. Success state: gold checkmark animation + "You're on the list. We'll be in touch."
Below forms: "What happens next?" Three steps: We review your submission, We reach out with early access details, You're among the first to use VessTrust. Staggered fade-up.

PAGE 7 — CONTACT (/contact)
Hero: "Get in touch."
Two sections: Contact form (Name, Email, Subject dropdown — General, Partnership, Press, API Access, Other — Message field, Submit) and Contact options (Email card, WhatsApp card, LinkedIn card). Each contact card has icon, label, and link. Form success state with gold checkmark. 24-hour response promise shown below submit button.

PAGE 8 — LEGAL PAGES
/privacy — Privacy Policy. Clean white-background reading layout. Sticky left table of contents. Covers: data collection, storage, consent, rights, contact.
/terms — Terms of Service. Same layout. Covers: account terms, API usage, liability, termination.
/regulatory — Regulatory Notice. Short page. States VessTrust is pursuing Credit Reference Bureau registration under the Bank of Ghana's Credit Reporting Act 2007 (Act 726) and is building in compliance with the Data Protection Act 2012 (Act 843).

GLOBAL ANIMATION RULES

whileInView fade-up on all sections, viewport={{ once: true }}
staggerChildren: 0.12 on all card grids
whileHover={{ scale: 1.02 }} on all cards and buttons
Hero headline: word-by-word staggered reveal on page load
Stats section: count-up animation using a custom hook when entering viewport
Marquee trust bar: infinite left-scroll using Framer Motion animate={{ x: [0, -50%] }} with repeat: Infinity
Score dial on homepage: animate={{ value: 742 }} count-up with spring easing
Page transitions: subtle fade between routes


COMPONENT LIBRARY TO BUILD
<ScoreDial /> — animated circular score gauge with gold arc
<StatCounter /> — count-up number animation with Framer Motion
<MarqueeBand /> — infinite scroll trust strip
<APIBlock /> — styled code preview block with gold syntax theme
<WaitlistForm /> — dual-column form with validation and success state
<TimelinePhase /> — animated phase timeline for roadmap
<FactorCard /> — the 7-field cards with hover animation
<PersonaPanel /> — full-width alternating persona sections
<NavBar /> — sticky with blur and mobile hamburger
<Footer /> — four-column with all links
<WhatsAppButton /> — fixed bottom-right chat button
<CookieBanner /> — GDPR-ready consent banner

DEPLOYMENT

Next.js 14 with App Router
Tailwind CSS with custom config extending the VessTrust colour palette
Framer Motion installed and configured
Environment variables: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_WHATSAPP_NUMBER, WAITLIST_WEBHOOK_URL
next.config.js configured for Vercel deployment
vercel.json with no special rewrites needed
SEO: metadata object on every page with title, description, og:image, og:url, twitter:card
sitemap.xml and robots.txt generated
All images use Next.js <Image /> component
GitHub repository: vesstrust-web, push to main branch, Vercel auto-deploys on push


DO NOT:

Use stock photography
Use kente patterns or decorative African motifs
Use gradients on backgrounds
Hardcode any phone numbers or emails (use environment variables)
Create pages that feel like a startup landing page — this is financial infrastructure, the tone is institutional and serious
Use emoji anywhere on the site
Use font weights above 600