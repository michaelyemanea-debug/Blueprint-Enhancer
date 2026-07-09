import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Settings, Tags } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import methImg from '@assets/generated_images/methodology-tech.jpg';

export default function Methodology() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-32 pb-24 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full lg:w-1/2"
              >
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">Technical Framework</span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold mb-8 text-foreground tracking-tight">The Ydhar Asset Valuation and Consultancy Methodology</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  Valuation is not guesswork. It is a precise discipline guided by strict international financial reporting standards. We employ globally recognized methods to deliver data that withstands elite audit scrutiny.
                </p>
                <div className="inline-flex items-center gap-4 border border-border px-6 py-3 bg-background shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-mono font-medium tracking-wide">IVS 300 COMPLIANT</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/3] bg-muted border border-border relative overflow-hidden group">
                  <img src={methImg} alt="Engineering Data" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Depreciated Replacement Cost (DRC)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  The definitive approach for specialized assets rarely sold on the open market, such as heavy manufacturing plants and custom infrastructure. We calculate the current cost of replacing an asset with its modern equivalent, then deduct physical deterioration, functional obsolescence, and economic obsolescence.
                </p>
                <div className="text-xs font-mono text-primary/80 bg-primary/5 p-4 border border-primary/10">
                  Applied to: Industrial Plants, Utility Grids, Custom Facilities
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-10 border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <BarChart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Direct Market Comparison</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  For assets with active secondary markets, we analyze recent transactions of similar assets, adjusting for differences in age, condition, capacity, and location. This provides a transparent, defensible market value based on real-world transaction data.
                </p>
                <div className="text-xs font-mono text-primary/80 bg-primary/5 p-4 border border-primary/10">
                  Applied to: Real Estate, Vehicle Fleets, Standard Machinery
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <Tags className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Intelligent Field Tagging</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  A crucial operational step backing our financial data. We deploy engineers to physically verify, barcode, and componentize assets on-site using advanced CAMA (Computer Assisted Mass Appraisal) architecture, ensuring exact alignment with the Fixed Asset Register.
                </p>
                <div className="text-xs font-mono text-primary/80 bg-primary/5 p-4 border border-primary/10">
                  Applied to: All Tangible Asset Portfolios
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8">Ready to apply these methodologies to your portfolio?</h2>
            <p className="text-primary-foreground/80 mb-12 text-lg md:text-xl font-light">Our valuation reports are trusted by the region's largest banks, auditors, and conglomerates.</p>
            <a href="/contact" className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 font-medium hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] text-lg group">
              Engage the Firm <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
