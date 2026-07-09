import { Link } from 'wouter';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-accent flex items-center justify-center text-primary font-display font-bold text-xl transition-transform group-hover:scale-105 duration-300">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight tracking-tight text-white">Ydhar</span>
                <span className="text-[10px] font-mono tracking-widest text-primary-foreground/70 uppercase leading-none">Asset Valuation & Consultancy</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
Engineering intelligence meets financial foresight — independent, precise, and forward-looking asset valuation for complex infrastructure and diverse industries.
            </p>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60 font-mono bg-white/5 p-3 border border-white/10 w-fit">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>IVS & IFRS Compliant</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-px bg-accent"></span> Services
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Manufacturing & Heavy Industry</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Financial & Government Institutions</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Telecommunications & Tech</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Real Estate & Agriculture</Link></li>
              <li><Link href="/business-valuation" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Business Valuation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-px bg-accent"></span> Firm
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Company Profile</Link></li>
              <li><Link href="/methodology" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Methodology</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Data & Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-px bg-accent"></span> Headquarters
            </h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-4">
              <p className="leading-relaxed">
                Ayertena, Ydhar Building, 3rd Floor<br />
                Addis Ababa, Ethiopia
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a href="mailto:ydharav@gmail.com" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group">
                  <span className="border-b border-primary-foreground/30 group-hover:border-accent pb-0.5 transition-colors">ydharav@gmail.com</span>
                </a>
                <div className="flex flex-col gap-1 font-mono text-xs text-primary-foreground/70">
                  <span>+251 911 42 92 39</span>
                  <span>+251 113 69 39 40</span>
                  <span>+251 911 44 04 54</span>
                </div>
                <div className="font-mono text-[10px] tracking-widest mt-2 text-primary-foreground/40 bg-white/5 px-3 py-1.5 w-fit border border-white/5">
                  EN | AM | TI
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Ydhar Asset Valuation and Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
