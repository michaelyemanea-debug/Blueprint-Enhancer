import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Activity, Beaker, Truck, Zap, ArrowRight, Building2, Trees, Landmark } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Use generated images
import medicalImg from '@assets/generated_images/services-medical.jpg';
import miningImg from '@assets/generated_images/services-mining.jpg';
import energyImg from '@assets/generated_images/services-energy.jpg';

export default function Services() {
  const pillars = [
    {
      id: 'real-estate',
      title: 'Real Estate & Commercial Property',
      icon: Building2,
      description: 'Comprehensive valuation for residential, commercial, and mixed-use property portfolios. We provide precise market assessments for developers, banks, and corporate property owners.',
      features: ['Corporate headquarters & office towers', 'Hospitality & hotel portfolios', 'Shopping malls & retail centers', 'Large-scale residential developments'],
      image: null // Placeholder or hero img
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Agro-Processing',
      icon: Trees,
      description: 'Expertise in valuing complex agricultural assets, biological assets, and processing infrastructure critical to the national export economy.',
      features: ['Commercial farms & plantations', 'Coffee washing & export stations', 'Silos & grain storage facilities', 'Food processing machinery'],
      image: miningImg // reuse for now, or update if we have an ag image
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Heavy Industry',
      icon: Activity,
      description: 'Comprehensive valuation for complex industrial facilities where plant machinery and highly specialized equipment represent the core asset value.',
      features: ['Steel rolling mills & foundries', 'Chemical processing plants', 'Textiles & apparel manufacturing', 'FMCG production lines'],
      image: energyImg
    },
    {
      id: 'financial',
      title: 'Financial & Public Infrastructure',
      icon: Landmark,
      description: 'Supporting public institutions, telecom operators, and financial sectors with rigorous valuation of widespread networks and infrastructure.',
      features: ['Telecommunication towers & networks', 'Bank collateral & REO assets', 'Government utility infrastructure', 'Transport & logistics fleets'],
      image: medicalImg
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-mono text-sm tracking-widest uppercase mb-6 block"
              >
                Comprehensive Coverage
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold mb-8 tracking-tight"
              >
                Valuation Service Pillars
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
              >
                From commercial real estate to agricultural processing and heavy industry, our field engineering teams deliver precise asset identification, verification, and valuation across virtually every sector.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {pillars.map((pillar, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  key={pillar.id} 
                  className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden border border-border group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
                      {pillar.image ? (
                        <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center font-mono text-muted-foreground bg-grid-pattern">
                          [Industrial Photography]
                        </div>
                      )}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-white flex items-center justify-center text-primary shadow-xl z-20">
                        <pillar.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-flex px-4 py-1.5 bg-muted border border-border text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      SECTOR 0{index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">{pillar.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pillar.description}</p>
                    
                    <div className="pt-8 border-t border-border">
                      <h4 className="text-sm font-mono font-semibold mb-6 uppercase tracking-wider text-foreground">Key Asset Classes</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {pillar.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                            <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card border-t border-border py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Need a Business Valuation?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Beyond physical assets, we value going concerns, brand power, and intangible assets under IVS 210 and IFRS 3 for M&A and restructuring.
            </p>
            <Link href="/business-valuation" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-all hover:shadow-xl">
              Explore Business Valuation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
