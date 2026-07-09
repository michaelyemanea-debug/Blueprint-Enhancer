import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import aboutImg from '@assets/generated_images/about-engineers.jpg';

export default function About() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-card pt-32 pb-24 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block"
              >
                Firm Profile
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-semibold mb-8 text-foreground tracking-tight"
              >
                A Decade of Excellence in Asset Intelligence
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                We are the region's premier tangible and intangible asset valuation firm, providing independent, accurate, and accountable solutions for complex infrastructure and diverse industries.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-10"
              >
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Valuation Data You Can Trust</h2>
                
                <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
                  <p>
                    Approaching a decade of experience, Ydhar Asset Valuation and Consultancy has established itself as the trusted authority for landmark corporate decisions. We deliver independent, accurate, and accountable solutions for real estate, plant and machinery, specialized property, and complex infrastructure across the region.
                  </p>
                  <p>
                    Backed by global industry standards like IVS and IFRS, our professionally qualified valuers and engineers partner with leading financial institutions, construction conglomerates, and government sectors. We don't just observe assets; we understand the engineering, market dynamics, and economics behind them.
                  </p>
                  <p>
                    Our expertise spans across heavy industries, financial and corporate institutions, commercial property portfolios, fleet valuation, business intangibles, and agricultural infrastructure. Whether it's an acquisition due diligence, insurance renewal, or asset restructuring, our reports provide absolute clarity and confidence.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-10 pt-10 border-t border-border">
                  <div>
                    <div className="text-5xl font-display font-semibold text-primary mb-3">10<span className="text-accent">+</span></div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-5xl font-display font-semibold text-primary mb-3">IVS</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Standard Compliant</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="bg-muted p-6 border border-border shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] bg-background relative overflow-hidden">
                    <img src={aboutImg} alt="Our Engineers" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="p-6 text-center bg-background mt-4 border border-border/50">
                    <p className="text-sm font-mono text-foreground tracking-widest">FIELD DEPLOYMENT // HQ OPERATIONS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
