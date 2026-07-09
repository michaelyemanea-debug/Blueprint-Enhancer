import React from 'react';
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
        <section className="bg-primary text-primary-foreground pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={businessImg} alt="Corporate Valuation" className="w-full h-full object-cover mix-blend-luminosity" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Strategic Finance</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">Business & Intangible Assets</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Expert valuation of business interests, going concerns, and identifiable intangibles to support M&A, restructuring, and rigorous regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6">Navigating Complex Transactions</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We provide authoritative opinions of value for business entities and intangible assets under International Valuation Standards (IVS 210) and IFRS 3. Whether for shareholder disputes, tax planning, or corporate acquisition, our methodologies stand up to the highest audit scrutiny.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                    <div className="p-6 border border-border bg-card">
                      <Briefcase className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">Going Concerns</h3>
                      <p className="text-sm text-muted-foreground">M&A due diligence, corporate restructuring, and resolution of shareholder disputes through precise enterprise value determination.</p>
                    </div>
                    <div className="p-6 border border-border bg-card">
                      <FileText className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">Identifiable Intangibles</h3>
                      <p className="text-sm text-muted-foreground">Valuation of proprietary technology, brand equity, customer contracts, and goodwill allocation as required by global financial reporting standards.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6">The Execution Model</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our approach marries financial modeling with deep operational understanding. We do not just analyze spreadsheets; we verify the physical and digital reality of the business.
                  </p>
                  
                  <ul className="space-y-6">
                    {[
                      { title: 'Verification & Clean-up of Fixed Asset Registers', desc: 'Reconciling ledger data against physical realities to establish a true asset baseline.' },
                      { title: 'Physical Tagging & Componentization (IAS 16)', desc: 'Rigorous barcoding and breakdown of complex machinery into depreciable components.' },
                      { title: 'CAMA / ERP Data Integration', desc: 'Seamlessly porting valuation data into your enterprise resource planning systems for ongoing management.' }
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary font-mono text-sm">
                          0{i+1}
                        </div>
                        <div>
                          <h4 className="text-lg font-display font-semibold">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-foreground text-background p-8 sticky top-32">
                  <h3 className="text-xl font-display font-semibold mb-4">Request a Consultation</h3>
                  <p className="text-sm text-background/70 mb-8">Discuss your specific M&A or compliance requirements with our senior valuation directors.</p>
                  <Link href="/contact" className="w-full block text-center bg-accent text-primary px-6 py-3 font-medium hover:bg-accent/90 transition-colors">
                    Contact Our Team
                  </Link>
                  
                  <hr className="border-background/20 my-8" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-accent" />
                      <span className="text-sm font-mono text-background/90">IFRS 3 Compliant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-mono text-background/90">IVS 210 Standard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matrix Table */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold mb-10 text-center">Operational Environments vs Technical Solutions</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-4 border border-border bg-muted font-display font-semibold text-foreground w-1/4">Environment</th>
                    <th className="p-4 border border-border bg-muted font-display font-semibold text-foreground">Typical Asset Profile</th>
                    <th className="p-4 border border-border bg-muted font-display font-semibold text-foreground">Valuation Approach</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 border border-border font-medium text-foreground">Heavy Industry</td>
                    <td className="p-4 border border-border">Integrated plant & machinery, specialized manufacturing lines</td>
                    <td className="p-4 border border-border">Depreciated Replacement Cost (DRC), Componentization</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 border border-border font-medium text-foreground">Mining & Extractive</td>
                    <td className="p-4 border border-border">Earthmoving fleets, extraction infrastructure, remote camps</td>
                    <td className="p-4 border border-border">Direct Market Comparison, DRC for static infrastructure</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 border border-border font-medium text-foreground">Healthcare</td>
                    <td className="p-4 border border-border">Diagnostic imaging, surgical systems, specialized IT</td>
                    <td className="p-4 border border-border">Market Value for Existing Use, Technological Obsolescence factors</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 border border-border font-medium text-foreground">Corporate / Public Sector</td>
                    <td className="p-4 border border-border">Vehicle fleets, IT infrastructure, office equipment, intangibles</td>
                    <td className="p-4 border border-border">Market Comparison, Income Approach for intangibles</td>
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
