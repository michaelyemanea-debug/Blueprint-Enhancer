import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, FileText, Briefcase, Database } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import businessImg from '@assets/generated_images/business-valuation.jpg';

export default function BusinessValuation() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={businessImg} alt="Corporate Valuation" className="w-full h-full object-cover mix-blend-luminosity scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-mono text-sm tracking-widest uppercase mb-6 block"
              >
                Strategic Finance
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold mb-8 tracking-tight"
              >
                Business & Intangible Assets
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
              >
                Expert valuation of business interests, going concerns, and identifiable intangibles to support M&A, restructuring, and rigorous regulatory compliance.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Navigating Complex Transactions</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We provide authoritative opinions of value for business entities and intangible assets under International Valuation Standards (IVS 210) and IFRS 3. Whether for shareholder disputes, tax planning, or corporate acquisition, our methodologies stand up to the highest audit scrutiny.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    <div className="p-8 border border-border bg-card hover:border-primary/30 transition-colors group">
                      <Briefcase className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-display font-semibold mb-3">Going Concerns</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">M&A due diligence, corporate restructuring, and resolution of shareholder disputes through precise enterprise value determination.</p>
                    </div>
                    <div className="p-8 border border-border bg-card hover:border-primary/30 transition-colors group">
                      <FileText className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-display font-semibold mb-3">Identifiable Intangibles</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Valuation of proprietary technology, brand equity, customer contracts, and goodwill allocation as required by global financial reporting standards.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">The Execution Model</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Our approach marries financial modeling with deep operational understanding. We do not just analyze spreadsheets; we verify the physical and digital reality of the business.
                  </p>
                  
                  <ul className="space-y-8">
                    {[
                      { title: 'Verification & Clean-up of Asset Registers', desc: 'Reconciling ledger data against physical realities to establish a true asset baseline for enterprise value.' },
                      { title: 'Physical Tagging & Componentization (IAS 16)', desc: 'Rigorous breakdown of complex operational machinery into depreciable components.' },
                      { title: 'Data Integration', desc: 'Seamlessly porting valuation data into your enterprise resource planning systems for ongoing management.' }
                    ].map((step, i) => (
                      <li key={i} className="flex gap-6 group">
                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-none bg-muted flex items-center justify-center text-primary font-mono text-sm border border-border group-hover:bg-primary group-hover:text-accent transition-colors">
                          0{i+1}
                        </div>
                        <div>
                          <h4 className="text-xl font-display font-semibold mb-2">{step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-foreground text-background p-10 sticky top-32 shadow-2xl"
                >
                  <h3 className="text-2xl font-display font-semibold mb-4">Request a Consultation</h3>
                  <p className="text-background/70 mb-10 leading-relaxed">Discuss your specific M&A or compliance requirements with our senior valuation directors.</p>
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-accent text-primary px-6 py-4 font-medium hover:bg-accent/90 transition-colors group">
                    Contact Our Team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <hr className="border-background/20 my-10" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Database className="w-6 h-6 text-accent" />
                      <span className="font-mono text-background/90 tracking-wide">IFRS 3 Compliant</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      <span className="font-mono text-background/90 tracking-wide">IVS 210 Standard</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Matrix Table */}
        <section className="py-24 bg-card border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Operational Environments vs Technical Solutions</h2>
            
            <div className="overflow-x-auto shadow-sm border border-border">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-6 border-b border-border bg-muted/50 font-display font-semibold text-foreground w-1/4">Environment</th>
                    <th className="p-6 border-b border-border bg-muted/50 font-display font-semibold text-foreground">Typical Asset Profile</th>
                    <th className="p-6 border-b border-border bg-muted/50 font-display font-semibold text-foreground">Valuation Approach</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground bg-background">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 border-b border-border font-medium text-foreground">Heavy Industry</td>
                    <td className="p-6 border-b border-border">Integrated plant & machinery, specialized manufacturing lines</td>
                    <td className="p-6 border-b border-border">Depreciated Replacement Cost (DRC), Componentization</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 border-b border-border font-medium text-foreground">Real Estate</td>
                    <td className="p-6 border-b border-border">Commercial towers, residential developments, land banks</td>
                    <td className="p-6 border-b border-border">Income Capitalization, Direct Market Comparison</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 border-b border-border font-medium text-foreground">Agriculture</td>
                    <td className="p-6 border-b border-border">Biological assets, processing stations, heavy equipment</td>
                    <td className="p-6 border-b border-border">Market Value for Existing Use, DRC for static infrastructure</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 border-b border-border font-medium text-foreground">Corporate M&A</td>
                    <td className="p-6 border-b border-border">Going concerns, intellectual property, brand equity</td>
                    <td className="p-6 border-b border-border">Discounted Cash Flow (DCF), Relief from Royalty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
