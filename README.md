# VessTrust — Pan-African Credit Infrastructure

VessTrust is a neutral credit reference layer built in Accra, Ghana, designed for the African financial ecosystem. It converts mobile money (MoMo) transaction history into portable credit scores, enabling the 493 million unbanked adults across Africa to access commercial credit, digital loans, and trade finance.

---

## 🚀 Tech Stack

* **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Playfair Display (Serif headings) & Inter (Sans-serif body)

---

## ✨ Features & Capabilities

### 1. Alternate Credit Scoring Model
VessTrust's scoring engine runs on alternative data vectors extracted from carrier wallets, evaluating 7 primary behavioral fields:
* **`tx_frequency`**: Overall transactional activity per month.
* **`avg_tx_value`**: Normalized transaction volumes to estimate capacity.
* **`balance_retention`**: Ratio of capital retained over a 30-day window.
* **`counterparty_count`**: Supplier/vendor diversity metric (valuable for SMEs).
* **`bill_consistency`**: On-time utility, school fees, and solar repayments.
* **`loan_repayment`**: Historical micro-credit product discipline.
* **`airtime_regularity`**: Top-up regularity acting as a micro-income proxy.

### 2. Interactive SVG Score Dial
A high-performance visual gauge (`ScoreDial.jsx`) that simulates Vess Score calculations (ranging from 300 to 850) dynamically upon entering the viewport, providing a visual look at a user's credit status.

### 3. High-Fidelity Mock API Terminal
Developers can explore query payloads and JSON schema configurations directly from the homepage using the tabbed workspace mockup (`APIBlock.jsx`).

### 4. Interactive Framer Motion Marquee Scroller
A smooth, frame-rate independent trust scroller (`MarqueeBand.jsx`) driven by Framer Motion's `useAnimationFrame` hook. The ticker decelerates gracefully to a complete pause on mouse hover, offering an elegant micro-interaction.

### 5. Dual-Segment Onboarding Forms
The `/waitlist` features custom double-segment input sheets (`WaitlistForm.jsx`) tailored separately for individual consumers and institutional lending partners.

---

## 🎨 Design System

VessTrust utilizes a premium, warm Alabaster light-mode palette:
* **Background Canvas**: `#F8F8F6` (Alabaster Off-white)
* **Surface Containers**: `#FFFFFF` (Pure White)
* **Default Typography**: `#0E1629` (Obsidian Charcoal)
* **Primary Accents**: `#B59445` (Champagne Matte Gold)
* **Secondary Labels**: `#475569` (Muted Slate)

---

## 📁 Repository Structure

```text
├── src/
│   ├── app/
│   │   ├── about/             # Origins, Founder's story, and regional expansion roadmap
│   │   ├── api/               # API endpoint connectors
│   │   ├── contact/           # Business and general inquiry sheets
│   │   ├── for-individuals/   # Consumer benefits, mobile mockups, and store links
│   │   ├── for-lenders/       # Developer documentation links and lender options
│   │   ├── how-it-works/      # Consent flows and alternate scoring indexes
│   │   ├── legal/             # /privacy, /terms, and /regulatory policy boards
│   │   ├── waitlist/          # Form dashboard for early sandbox access
│   │   ├── globals.css        # Global CSS overrides and typography styling
│   │   ├── layout.js          # Root HTML/Body setup and tracking wrappers
│   │   └── page.js            # Main homepage container
│   │
│   └── components/            # Reusable UI component modules (NavBar, Footer, APIBlock, etc.)
│
├── tailwind.config.js         # Color tokens, fonts, and box shadow setups
└── package.json               # Dependencies and command definitions
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js (v18.x or higher) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ernest-Glate/VessTrust.git
   cd VessTrust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

4. Build production bundle:
   ```bash
   npm run build
   ```

---

## ⚖️ Regulatory Compliance & Security
VessTrust operates in strict compliance with West African financial regulations:
* **Credit Reporting**: Pursuing registration as a registered Credit Reference Bureau under the Bank of Ghana's **Credit Reporting Act, 2007 (Act 726)**.
* **Data Privacy**: All data ingestion, transit pipelines, and consumer consent procedures adhere to the **Data Protection Act, 2012 (Act 843)**.

---

## 🏢 Corporate Ecosystem
* **Lncksys**: Lncksys is the registered Ghanaian software company behind VessTrust and VessPay.
* **VessPay**: Our sister platform that handles diagonal border wallet pipelines for cross-border diaspora transfers.
