import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-foreground text-background pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold mb-6 tracking-tight"
            >
              Contact the Firm
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed"
            >
              Engage our senior valuation directors for consultation regarding your tangible or intangible asset portfolios.
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-display font-semibold mb-10 text-foreground">Addis Ababa Headquarters</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-accent transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-2 tracking-wider">Location</h4>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        Ayertena, Ydhar Building, 3rd Floor<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-accent transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-2 tracking-wider">Email inquiries</h4>
                      <a href="mailto:ydharav@gmail.com" className="text-primary hover:text-accent transition-colors font-medium text-base inline-flex items-center gap-2">
                        ydharav@gmail.com <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-accent transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-2 tracking-wider">Direct Lines</h4>
                      <p className="text-muted-foreground font-mono text-base leading-relaxed">
                        +251 911 42 92 39<br />
                        +251 113 69 39 40<br />
                        +251 911 44 04 54
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-card border border-border shadow-sm">
                  <h3 className="text-xl font-display font-semibold mb-3">Secure & Confidential</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All communications and documentation shared with Ydhar Asset Valuation and Consultancy are subject to strict corporate non-disclosure policies. Read our <a href="/privacy" className="text-primary underline hover:text-accent transition-colors">Privacy Policy</a> regarding data handling.
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-card border border-border p-8 md:p-12 shadow-xl">
                  <h2 className="text-2xl font-display font-semibold mb-8 text-foreground">Submit an Inquiry</h2>
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 flex flex-col items-center text-center"
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                      <h3 className="text-2xl font-display font-semibold mb-3">Inquiry Received</h3>
                      <p className="text-muted-foreground text-base max-w-md">
                        Thank you for contacting Ydhar Asset Valuation and Consultancy. A senior director will review your requirements and respond shortly.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-10 text-sm font-medium text-primary hover:text-accent underline transition-colors"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-muted-foreground font-medium tracking-wide">Full Name</label>
                          <input type="text" required className="w-full h-14 px-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-muted-foreground font-medium tracking-wide">Company Name</label>
                          <input type="text" required className="w-full h-14 px-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium tracking-wide">Corporate Email</label>
                        <input type="email" required className="w-full h-14 px-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium tracking-wide">Subject / Asset Class</label>
                        <select required className="w-full h-14 px-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all appearance-none">
                          <option value="">Select an option</option>
                          <option value="real_estate">Real Estate & Commercial Property</option>
                          <option value="agriculture">Agriculture & Agro-Processing</option>
                          <option value="manufacturing">Manufacturing & Heavy Industry</option>
                          <option value="financial">Financial & Public Infrastructure</option>
                          <option value="business">Business Valuation / Intangibles</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium tracking-wide">Message Details</label>
                        <textarea required rows={5} className="w-full p-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-primary text-primary-foreground h-14 font-medium hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 group">
                        Transmit Request <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
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
