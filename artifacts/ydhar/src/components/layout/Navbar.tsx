import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl transition-transform group-hover:scale-105 duration-300">
            Y
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-tight tracking-tight text-primary transition-colors group-hover:text-primary/80">Ydhar</span>
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase leading-none">Asset Valuation & Consultancy</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-accent py-2 ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {link.label}
              {location === link.href && (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="group relative overflow-hidden bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium transition-all hover:shadow-lg flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">Engage Us <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            <span className="absolute inset-0 flex items-center gap-2 px-6 py-2.5 z-10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">Engage Us <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </nav>

        <button 
          className="lg:hidden z-50 text-foreground p-2 hover:bg-muted transition-colors rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-4 flex flex-col gap-6 lg:hidden overflow-y-auto pb-10"
          >
            {links.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.href}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-3xl font-display font-medium border-b border-border pb-4 transition-colors ${location === link.href ? 'text-primary border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
              className="mt-8"
            >
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Firm <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
