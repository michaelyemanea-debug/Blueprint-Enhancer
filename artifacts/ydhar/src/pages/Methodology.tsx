import React from 'react';
import { ArrowRight, BarChart, Settings, Tags } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import methImg from '@assets/generated_images/methodology-tech.jpg';

export default function Methodology() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-24 pb-20 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Technical Framework</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 text-foreground">The YDHAR Methodology</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Valuation is not guesswork. It is an engineering discipline guided by strict international financial reporting standards. We employ globally recognized methods to deliver data that withstands elite audit scrutiny.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 border border-border px-4 py-2 bg-background">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono font-medium">IVS 300 COMPLIANT</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] bg-muted border border-border relative">
                  <img src={methImg} alt="Engineering Data" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="p-8 border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center mb-8">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Depreciated Replacement Cost (DRC)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  The definitive approach for specialized assets rarely sold on the open market, such as heavy manufacturing plants and custom infrastructure. We calculate the current cost of replacing an asset with its modern equivalent, then deduct physical deterioration, functional obsolescence, and economic obsolescence.
                </p>
                <div className="text-xs font-mono text-primary/70 bg-primary/5 p-3">
                  Applied to: Steel Mills, Utility Grids, Chemical Plants
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center mb-8">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Direct Market Comparison</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  For assets with active secondary markets, we analyze recent transactions of similar assets, adjusting for differences in age, condition, capacity, and location. This provides a transparent, defensible market value based on real-world transaction data.
                </p>
                <div className="text-xs font-mono text-primary/70 bg-primary/5 p-3">
                  Applied to: Earthmoving Equipment, Vehicle Fleets, Standard Machinery
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center mb-8">
                  <Tags className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Intelligent Field Tagging</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A crucial operational step backing our financial data. We deploy engineers to physically verify, barcode, and componentize assets on-site using advanced CAMA (Computer Assisted Mass Appraisal) architecture, ensuring exact alignment with the Fixed Asset Register.
                </p>
                <div className="text-xs font-mono text-primary/70 bg-primary/5 p-3">
                  Applied to: All Tangible Asset Portfolios
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-display font-semibold mb-6">Ready to apply these methodologies to your portfolio?</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">Our valuation reports are trusted by Ethiopia's largest banks, auditors, and conglomerates.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 font-medium hover:bg-accent/90 transition-colors text-lg">
              Engage the Firm <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
