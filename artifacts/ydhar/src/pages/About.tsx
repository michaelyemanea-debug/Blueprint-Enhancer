import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import aboutImg from '@assets/generated_images/about-engineers.jpg';

export default function About() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-card pt-24 pb-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Firm Profile</span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-foreground">Decade of Excellence in Asset Intelligence</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are Ethiopia's premier tangible and intangible asset valuation firm, providing independent, accurate, and accountable solutions for complex infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-3xl font-display font-semibold text-foreground">Valuation Data You Can Trust</h2>
                
                <div className="prose prose-slate max-w-none text-muted-foreground">
                  <p className="text-lg">
                    Approaching a decade of experience, YDHAR Asset Valuation PLC has established itself as the trusted authority for billion-Birr decisions. We deliver independent, accurate, and accountable solutions for plant and machinery, specialized property, and complex infrastructure across Ethiopia.
                  </p>
                  <p>
                    Backed by global industry standards like IVS and IFRS, our professionally qualified valuers and engineers partner with Ethiopia's leading financial institutions, construction conglomerates, and government sectors. We don't just observe assets; we understand the engineering and economics behind them.
                  </p>
                  <p>
                    Our expertise spans across heavy industries, civil works, fleet valuation, business intangibles, and meticulous physical tagging. Whether it's an acquisition due diligence, insurance renewal, or asset restructuring, our reports provide absolute clarity and confidence.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                  <div>
                    <div className="text-4xl font-display font-semibold text-primary mb-2">10+</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-semibold text-primary mb-2">IVS</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase">Standard Compliant</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-muted p-4 border border-border">
                  <div className="aspect-[4/3] bg-background relative overflow-hidden">
                    <img src={aboutImg} alt="Our Engineers" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm font-mono text-muted-foreground">FIELD DEPLOYMENT // ADDIS ABABA HQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
