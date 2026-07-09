import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-muted pt-24 pb-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-foreground">Data Privacy & Security Policy</h1>
            <p className="text-muted-foreground">Effective Date: January 1, 2024</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="text-lg text-foreground font-medium mb-8">
                At YDHAR Asset Valuation PLC, we recognize that the valuation of tangible and intangible assets involves highly sensitive corporate and financial data. We are committed to maintaining the highest standards of data confidentiality, residency, and security for our clients across Ethiopia.
              </p>

              <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">1. Collection and Storage of Client Data</h2>
              <p>
                During the execution of a valuation mandate, our field teams and analysts collect necessary documentation, which may include:
              </p>
              <ul>
                <li>Fixed Asset Registers (FAR) and corporate ERP data extracts.</li>
                <li>On-site photographs of plant machinery, infrastructure, and facilities.</li>
                <li>Financial statements, legal contracts, and intellectual property records for business valuation.</li>
              </ul>
              <p>
                All collected data is stored on secure, encrypted corporate servers. We enforce strict data residency practices, ensuring that sensitive financial and operational data pertaining to Ethiopian enterprises remains within highly secure, locally compliant infrastructure.
              </p>

              <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">2. Protection of On-Site Media</h2>
              <p>
                Photographs and technical diagrams captured by our field engineering teams are strictly utilized for the purpose of validating the existence, condition, and configuration of assets. 
              </p>
              <ul>
                <li>Media is transferred directly from field devices to our secure internal network via encrypted channels.</li>
                <li>Images of proprietary manufacturing processes or sensitive clinical environments are handled under strict Non-Disclosure Agreements (NDAs).</li>
                <li>No client site imagery is ever used for marketing or public portfolios without explicit, written authorization from the client.</li>
              </ul>

              <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">3. Data Retention and Destruction</h2>
              <p>
                In compliance with International Valuation Standards (IVS) and local financial auditing requirements, YDHAR retains final valuation reports and supporting technical workfiles for a mandatory statutory period (typically 5 to 7 years) to satisfy audit and regulatory inquiries.
              </p>
              <p>
                Upon the expiration of the mandatory retention period, or upon explicit client request where legally permissible, all digital records and physical documentation are permanently and securely destroyed.
              </p>

              <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">4. Digital Security Protocols</h2>
              <p>
                Our digital environment utilizes AES-256 encryption for data at rest and TLS 1.3 for data in transit. Access to client files is restricted on a strict least-privilege basis—only the lead valuer, assigned engineering team, and authorized review directors possess access to a project's data vault.
              </p>

              <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">5. Contact Regarding Privacy</h2>
              <p>
                For questions regarding how we handle your corporate data, or to request an audit of data held regarding a past valuation mandate, please contact our Compliance Officer at:
                <br /><br />
                <strong>Email:</strong> compliance@ydhar.com<br />
                <strong>Address:</strong> Bole Sub-City, Woreda 03, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
