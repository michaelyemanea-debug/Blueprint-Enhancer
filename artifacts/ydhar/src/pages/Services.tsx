import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Activity, Beaker, Truck, Zap, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Use generated images
import medicalImg from '@assets/generated_images/services-medical.jpg';
import miningImg from '@assets/generated_images/services-mining.jpg';
import energyImg from '@assets/generated_images/services-energy.jpg';

export default function Services() {
  const pillars = [
    {
      id: 'manufacturing',
      title: 'Heavy Manufacturing & Processing',
      icon: Activity,
      description: 'Comprehensive valuation for complex industrial facilities where plant machinery represents the core asset value.',
      features: ['Steel rolling mills & foundries', 'Chemical processing plants', 'Textiles & apparel manufacturing', 'FMCG production lines'],
      bgColor: 'bg-slate-50',
      image: null // Can use hero img or placeholder
    },
    {
      id: 'medical',
      title: 'Clinical & Medical Infrastructure',
      icon: Beaker,
      description: 'Specialized assessment of highly depreciable, technologically advanced healthcare equipment requiring deep technical knowledge.',
      features: ['Diagnostic imaging (MRI, CT)', 'Ventilators & life support', 'Surgical & ophthalmic systems', 'Laboratory infrastructure'],
      bgColor: 'bg-white',
      image: medicalImg
    },
    {
      id: 'mining',
      title: 'Mining, Extractive & Heavy Equipment',
      icon: Truck,
      description: 'Remote site valuations requiring rugged field operations to assess mobile and fixed assets in harsh environments.',
      features: ['Earthmoving fleets (Excavators, Dumpers)', 'Crushing & screening plants', 'Drilling rigs', 'On-site processing facilities'],
      bgColor: 'bg-slate-50',
      image: miningImg
    },
    {
      id: 'energy',
      title: 'Energy & Utility Infrastructure',
      icon: Zap,
      description: 'Valuation of critical infrastructure assets supporting national grids and localized industrial power needs.',
      features: ['High-voltage substations', 'Industrial generators', 'Transformers & switchgears', 'Transmission networks'],
      bgColor: 'bg-white',
      image: energyImg
    }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Core Competencies</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">Valuation Service Pillars</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                From steel mills to remote mining sites, our field engineering teams deliver precise asset identification, verification, and valuation across Ethiopia's most demanding sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {pillars.map((pillar, index) => (
                <div key={pillar.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden border border-border">
                      {pillar.image ? (
                        <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center font-mono text-muted-foreground">
                          [Industrial Photography]
                        </div>
                      )}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center text-primary shadow-sm">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-block px-3 py-1 bg-muted text-xs font-mono text-muted-foreground">
                      PILLAR 0{index + 1}
                    </div>
                    <h2 className="text-3xl font-display font-semibold text-foreground">{pillar.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pillar.description}</p>
                    
                    <div className="pt-6">
                      <h4 className="text-sm font-display font-semibold mb-4 uppercase tracking-wider text-foreground">Key Asset Classes:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pillar.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card border-t border-border py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold mb-6">Need a Business Valuation?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Beyond physical assets, we value going concerns, brand power, and intangible assets under IVS 210 and IFRS 3 for M&A and restructuring.
            </p>
            <Link href="/business-valuation" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors">
              Explore Business Valuation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
