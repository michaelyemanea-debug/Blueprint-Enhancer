import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const links = [
    { href: '/', label: 'Overview' },
    { href: '/services', label: 'Valuation Pillars' },
    { href: '/business-valuation', label: 'Business & Intangible' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'Firm Profile' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
            Y
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-tight text-primary">YDHAR</span>
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase leading-none">Asset Valuation</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 text-sm font-medium transition-colors flex items-center gap-2"
          >
            Engage Us <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>

        <button 
          className="lg:hidden z-50 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-4 flex flex-col gap-6 lg:hidden">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-display font-medium ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-primary text-primary-foreground text-center py-4 text-lg font-medium mt-4"
          >
            Contact Firm
          </Link>
        </div>
      )}
    </header>
  );
}
