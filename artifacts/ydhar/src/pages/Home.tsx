import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Activity, Database, Scale, CheckCircle2, ChevronRight } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-industrial.jpg';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Industrial Steel Plant" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono text-accent mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                IVS & IFRS COMPLIANT VALUATION
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] mb-6"
              >
                Engineering Precision. <br/>
                <span className="text-primary-foreground/70">Financial Certainty.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
              >
                Ethiopia's premier tangible and intangible asset valuation firm. Trusted by top construction, mining, and financial institutions for billion-Birr industrial asset valuations.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/services" className="bg-accent text-primary px-6 py-3.5 font-medium hover:bg-accent/90 transition-colors flex items-center gap-2">
                  Explore Capabilities <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="bg-white/10 border border-white/20 px-6 py-3.5 font-medium hover:bg-white/20 transition-colors">
                  Firm Profile
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="border-y border-border bg-card overflow-hidden py-10">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-mono text-muted-foreground mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale">
              <div className="text-xl font-display font-bold flex items-center gap-2">
                <div className="w-6 h-6 bg-foreground"></div>
                Daewoo Construction
              </div>
              <div className="text-xl font-display font-bold flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-4 border-foreground"></div>
                Kerchanshe Trading
              </div>
              <div className="text-xl font-display font-bold">
                BUNA PEN
              </div>
              <div className="text-xl font-display font-bold tracking-tighter">
                AB PLAST
              </div>
            </div>
          </div>
        </section>

        {/* Overview of Pillars */}
        <section className="py-24 bg-background bg-grid-pattern relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 text-foreground">Sector Expertise</h2>
                <p className="text-muted-foreground text-lg">We deploy specialized engineering teams to complex operational environments across Ethiopia, verifying physical reality against financial ledgers.</p>
              </div>
              <Link href="/services" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-1">
                View all pillars <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Heavy Manufacturing', icon: Activity, desc: 'Steel rolling mills, foundries, chemical processing, and FMCG lines.' },
                { title: 'Clinical & Medical', icon: Database, desc: 'Diagnostic imaging, ventilators, and surgical systems.' },
                { title: 'Mining & Extractive', icon: Activity, desc: 'Earthmoving fleets, crushers, and drilling rigs.' },
                { title: 'Energy Infrastructure', icon: Scale, desc: 'Substations, generators, and transmission networks.' }
              ].map((pillar, i) => (
                <div key={i} className="group bg-card border border-border p-8 hover:border-primary/50 transition-colors relative overflow-hidden">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-accent transition-colors">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Teaser */}
        <section className="py-24 bg-foreground text-background overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 border border-background/20 text-xs font-mono mb-6 text-background/70">
                  TECHNICAL RIGOR
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">The YDHAR Methodology</h2>
                <p className="text-background/70 text-lg mb-8 leading-relaxed">
                  We bridge the gap between engineering reality and financial reporting. Utilizing Depreciated Replacement Cost (DRC), Direct Market Comparison, and Intelligent Field Tagging under full IVS 300 compliance.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    'Barcoding & CAMA Architecture',
                    'Fixed Asset Register Reconciliation',
                    'Physical Tagging per IAS 16',
                    'ERP Data Integration'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-background/90">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link href="/methodology" className="bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors inline-flex items-center gap-2">
                  Read our methodology <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-background/5 border border-background/10 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-accent font-mono text-sm">DATA_STREAM_01</div>
                    <Activity className="w-6 h-6 text-background/50" />
                  </div>
                  <div className="space-y-6">
                    <div className="h-2 w-full bg-background/10 overflow-hidden">
                      <div className="h-full bg-accent w-[87%]"></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-background/50">
                      <span>VERIFICATION</span>
                      <span>87.2%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-background/10 overflow-hidden">
                      <div className="h-full bg-background/50 w-[94%]"></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-background/50">
                      <span>COMPONENTIZATION</span>
                      <span>94.0%</span>
                    </div>
                    
                    <div className="mt-8 border-t border-background/20 pt-8">
                      <div className="text-5xl font-display font-light">10+</div>
                      <div className="text-sm font-mono text-background/50 mt-2 uppercase">Years of engineering insight</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Narrative Blurbs */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Billion-Birr Interventions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  sector: 'Heavy Manufacturing',
                  value: '1.2B ETB',
                  title: 'Steel Rolling Mill Post-Acquisition',
                  desc: 'Complete componentization and valuation of a major steel production facility for M&A due diligence, ensuring IFRS 3 compliance for the acquiring conglomerate.'
                },
                {
                  sector: 'Agriculture & Processing',
                  value: '850M ETB',
                  title: 'Coffee Export Infrastructure',
                  desc: 'Intelligent field tagging and DRC valuation of remote processing stations and heavy vehicle fleets for a leading export union securing international financing.'
                },
                {
                  sector: 'Clinical Infrastructure',
                  value: '420M ETB',
                  title: 'Diagnostic Center Liquidation',
                  desc: 'Precise market-value assessment of highly specialized medical imaging equipment and surgical systems for asset restructuring.'
                }
              ].map((study, i) => (
                <div key={i} className="p-8 border border-border bg-background hover:shadow-lg transition-shadow group">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-muted-foreground uppercase">{study.sector}</span>
                    <span className="text-sm font-mono font-medium text-primary bg-primary/5 px-2 py-1">{study.value}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
