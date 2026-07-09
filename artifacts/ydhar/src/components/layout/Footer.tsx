import { Link } from 'wouter';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-display font-bold text-xl">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-white">YDHAR</span>
                <span className="text-[10px] font-mono tracking-widest text-primary-foreground/70 uppercase leading-none">Asset Valuation PLC</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Ethiopia's premier tangible and intangible asset valuation firm. Independent, accurate, and accountable solutions for complex infrastructure and heavy industry.
            </p>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60 font-mono">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>IVS & IFRS Compliant</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-accent transition-colors">Heavy Manufacturing</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Mining & Extractive</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Clinical & Medical</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Energy Infrastructure</Link></li>
              <li><Link href="/business-valuation" className="hover:text-accent transition-colors">Business Valuation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Firm</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">Company Profile</Link></li>
              <li><Link href="/methodology" className="hover:text-accent transition-colors">Methodology</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Data & Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Addis Ababa HQ</h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-4">
              <p>
                Bole Sub-City, Woreda 03<br />
                Addis Ababa, Ethiopia
              </p>
              <p className="flex flex-col gap-1">
                <a href="mailto:contact@ydhar.com" className="hover:text-accent transition-colors flex items-center gap-2">
                  contact@ydhar.com <ArrowRight className="w-3 h-3" />
                </a>
                <span className="font-mono text-xs mt-2 text-primary-foreground/50">EN | AM | TI</span>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} YDHAR Asset Valuation PLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
