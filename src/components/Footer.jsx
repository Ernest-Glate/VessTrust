import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "233500000000";

  return (
    <footer className="bg-[#FAF9F5] border-t border-slate-200/80 text-slate-600 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Product */}
        <div>
          <h4 className="text-slate-900 font-playfair font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/how-it-works" className="hover:text-gold transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/for-lenders" className="hover:text-gold transition-colors">
                For Lenders
              </Link>
            </li>
            <li>
              <Link href="/for-individuals" className="hover:text-gold transition-colors">
                For Individuals
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 2: Company */}
        <div>
          <h4 className="text-slate-900 font-playfair font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Lncksys/vesstrust-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal */}
        <div>
          <h4 className="text-slate-900 font-playfair font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/regulatory" className="hover:text-gold transition-colors">
                Regulatory Notice
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Connect */}
        <div>
          <h4 className="text-slate-900 font-playfair font-semibold mb-6">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200/80 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
        <div className="space-y-3">
          {/* Logo */}
          <Link href="/" className="font-playfair text-xl font-semibold tracking-wide flex items-center mb-0">
            <span className="text-[#0E1629] font-medium">Vess</span>
            <span className="text-gold ml-0.5">Trust</span>
          </Link>
          <p className="text-[11px] leading-relaxed text-slate-400 max-w-3xl">
            VessTrust is a credit reference layer. We are pursuing Credit Reference Bureau registration under the Bank of Ghana&apos;s Credit Reporting Act 2007 (Act 726) and operate in full compliance with the Data Protection Act 2012 (Act 843).
          </p>
        </div>
        <div className="text-[11px] text-slate-400 whitespace-nowrap self-start md:self-center">
          &copy; {currentYear} VessTrust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
