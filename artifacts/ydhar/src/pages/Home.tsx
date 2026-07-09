import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Activity, Database, Scale, CheckCircle2, ChevronRight, Building2, Trees, Landmark, Factory } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-industrial.jpg';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-primary text-primary-foreground">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: yHero }}
          >
            <img src={heroImg} alt="Industrial Infrastructure" className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/50"></div>
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 text-xs font-mono text-accent mb-8 shadow-2xl backdrop-blur-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                IVS & IFRS COMPLIANT VALUATION
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-[5rem] font-display font-semibold leading-[1.05] mb-8 tracking-tight"
              >
                Engineering Precision. <br/>
                <span className="text-primary-foreground/60">Financial Certainty.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed"
              >
Where engineering intelligence meets financial foresight. We decode the true value of tangible and intangible assets with precision built for tomorrow's economy — trusted by leading institutions across agriculture, real estate, manufacturing, and public infrastructure.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/services" className="group relative overflow-hidden bg-accent text-primary px-8 py-4 font-medium transition-all hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">Explore Capabilities <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
                </Link>
                <Link href="/about" className="bg-white/5 border border-white/10 px-8 py-4 font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Firm Profile
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="border-y border-border bg-card overflow-hidden py-12 relative">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-mono text-muted-foreground mb-10 uppercase tracking-widest">Trusted by industry leaders across all sectors</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-xl font-display font-bold flex items-center gap-2 hover:text-primary transition-colors">
                <Building2 className="w-6 h-6" />
                Daewoo Construction
              </div>
              <div className="text-xl font-display font-bold flex items-center gap-2 hover:text-primary transition-colors">
                <Trees className="w-6 h-6" />
                Kerchanshe Trading
              </div>
              <div className="text-xl font-display font-bold flex items-center gap-2 hover:text-primary transition-colors">
                <Factory className="w-6 h-6" />
                BUNA PEN
              </div>
              <div className="text-xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
                AB PLAST
              </div>
            </div>
          </div>
        </section>

        {/* Overview of Pillars */}
        <section className="py-32 bg-background bg-grid-pattern relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-foreground tracking-tight">Comprehensive Sector Expertise</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">We deploy specialized engineering and financial teams to diverse operational environments, delivering precise valuation data for real estate, agriculture, manufacturing, and beyond.</p>
              </div>
              <Link href="/services" className="group text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 bg-muted px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground">
                View all sectors <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Agriculture & Processing', icon: Trees, desc: 'Commercial farms, coffee export infrastructure, and agro-processing facilities.' },
                { title: 'Real Estate & Commercial', icon: Building2, desc: 'Corporate headquarters, hospitality portfolios, and mixed-use developments.' },
                { title: 'Manufacturing & Logistics', icon: Factory, desc: 'FMCG lines, transport fleets, and industrial warehousing hubs.' },
                { title: 'Public & Financial', icon: Landmark, desc: 'Government infrastructure, banking collateral, and telecom networks.' }
              ].map((pillar, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} 
                  className="group bg-card border border-border p-10 hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="w-14 h-14 bg-muted flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-accent transition-colors rounded-sm">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">{pillar.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Details <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Teaser */}
        <section className="py-32 bg-foreground text-background overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 border border-background/20 text-xs font-mono mb-8 text-accent bg-background/5"
                >
                  TECHNICAL RIGOR
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-display font-semibold mb-8"
                >
                  The Ydhar Asset Valuation and Consultancy Methodology
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-background/70 text-lg mb-10 leading-relaxed"
                >
                  We bridge the gap between physical reality and financial reporting. Utilizing globally accepted standards, Intelligent Field Tagging, and comprehensive market analysis under full IVS compliance.
                </motion.p>
                
                <ul className="space-y-5 mb-12">
                  {[
                    'Barcoding & CAMA Architecture',
                    'Fixed Asset Register Reconciliation',
                    'Physical Tagging per IAS 16',
                    'ERP Data Integration'
                  ].map((item, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex items-center gap-4 text-background/90 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                
                <Link href="/methodology" className="group bg-background text-foreground px-8 py-4 font-medium hover:bg-accent hover:text-primary transition-colors inline-flex items-center gap-3">
                  Read our methodology <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-background/5 border border-background/10 p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="text-accent font-mono text-sm tracking-wider">DATA_STREAM_01</div>
                    <Activity className="w-6 h-6 text-background/50" />
                  </div>
                  <div className="space-y-8 relative z-10">
                    <div>
                      <div className="h-1.5 w-full bg-background/10 overflow-hidden mb-3">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '87%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="h-full bg-accent"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between text-xs font-mono text-background/50">
                        <span>VERIFICATION</span>
                        <span className="text-accent">87.2%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="h-1.5 w-full bg-background/10 overflow-hidden mb-3">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '94%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="h-full bg-background/50"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between text-xs font-mono text-background/50">
                        <span>COMPONENTIZATION</span>
                        <span>94.0%</span>
                      </div>
                    </div>
                    
                    <div className="mt-12 border-t border-background/20 pt-10">
                      <div className="text-6xl font-display font-light text-white mb-2">10<span className="text-accent">+</span></div>
                      <div className="text-sm font-mono text-background/50 uppercase tracking-widest">Years of valuation insight</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Narrative Blurbs */}
        <section className="py-32 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Proven Track Record</span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">Landmark Engagements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  sector: 'Commercial Real Estate',
                  scale: 'National Scale',
                  title: 'Mixed-Use Development Portfolio',
                  desc: 'Comprehensive valuation of prime commercial and residential towers for a major financial institution\'s collateral restructuring, ensuring accurate market positioning.'
                },
                {
                  sector: 'Agriculture & Processing',
                  scale: 'Enterprise Scale',
                  title: 'Coffee Export Infrastructure',
                  desc: 'Intelligent field tagging and valuation of remote processing stations and heavy vehicle fleets for a leading export union securing international financing.'
                },
                {
                  sector: 'Industrial Manufacturing',
                  scale: 'High-Value Scale',
                  title: 'Steel Rolling Mill M&A',
                  desc: 'Complete componentization and valuation of a major production facility for acquisition due diligence, ensuring IFRS 3 compliance for the acquiring conglomerate.'
                }
              ].map((study, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i} 
                  className="p-10 border border-border bg-background hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-8 flex-col gap-4">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{study.sector}</span>
                    <span className="text-xs font-mono font-medium text-primary bg-primary/5 px-3 py-1.5 border border-primary/10">{study.scale}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
