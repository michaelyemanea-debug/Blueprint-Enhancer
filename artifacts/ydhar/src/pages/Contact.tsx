import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
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
        <section className="bg-foreground text-background pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">Contact the Firm</h1>
            <p className="text-lg text-background/70 max-w-2xl">
              Engage our senior valuation directors for consultation regarding your tangible or intangible asset portfolios.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-8 text-foreground">Addis Ababa Headquarters</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Bole Sub-City, Woreda 03<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-1">Email inquiries</h4>
                      <a href="mailto:contact@ydhar.com" className="text-primary hover:text-accent transition-colors font-medium">
                        contact@ydhar.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-foreground mb-1">Direct Line</h4>
                      <p className="text-muted-foreground font-mono">
                        +251 (0) 11 123 4567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-card border border-border">
                  <h3 className="font-display font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All communications and documentation shared with YDHAR Asset Valuation PLC are subject to strict corporate non-disclosure policies. Read our <a href="/privacy" className="text-primary underline">Privacy Policy</a> regarding data handling.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                <div className="bg-card border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">Submit an Inquiry</h2>
                  
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">Inquiry Received</h3>
                      <p className="text-muted-foreground text-sm">
                        Thank you for contacting YDHAR. A senior director will review your requirements and respond shortly.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-sm font-medium text-primary hover:text-accent underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-muted-foreground font-medium">Full Name</label>
                          <input type="text" required className="w-full h-12 px-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-muted-foreground font-medium">Company Name</label>
                          <input type="text" required className="w-full h-12 px-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium">Corporate Email</label>
                        <input type="email" required className="w-full h-12 px-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium">Subject / Asset Class</label>
                        <select required className="w-full h-12 px-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors appearance-none">
                          <option value="">Select an option</option>
                          <option value="manufacturing">Heavy Manufacturing Assets</option>
                          <option value="medical">Medical Infrastructure</option>
                          <option value="mining">Mining & Extractive</option>
                          <option value="business">Business Valuation / Intangibles</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-muted-foreground font-medium">Message Details</label>
                        <textarea required rows={4} className="w-full p-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-primary text-primary-foreground h-12 font-medium hover:bg-primary/90 transition-colors">
                        Transmit Request
                      </button>
                    </form>
                  )}
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
