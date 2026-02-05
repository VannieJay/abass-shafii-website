import React from 'react';
import { IMAGES, TRANSPARENCY_PRINCIPLES } from '@/lib/constants';

interface TransparencyPageProps {
  onNavigate: (page: string) => void;
}

const TransparencyPage: React.FC<TransparencyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Our Commitment</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Transparency & Ethics
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Our commitment to transparency, fairness, and ethical operations is the foundation 
              of everything we do. We believe trust must be earned through action, not words.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Our Transparency Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our operations and ensure the integrity of our giving process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TRANSPARENCY_PRINCIPLES.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[#1A365D] flex items-center justify-center text-white font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Influence Policy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Zero Influence Policy
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our Zero Influence Policy is the cornerstone of our commitment to fairness. 
                  It ensures that no individual, organization, or entity can affect who receives 
                  our grants.
                </p>
                <p>
                  This policy applies to everyone—including the founder, board members, staff, 
                  advisors, and any external parties. The selection process is entirely automated 
                  and cannot be accessed or modified by any human being.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-[#2C2C2C] mb-4">What This Means:</h4>
                  <ul className="space-y-3">
                    {[
                      'No one can recommend or nominate recipients',
                      'No one can review or approve selections before they are made',
                      'No one can access the selection algorithm or its inputs',
                      'No one can modify, delay, or accelerate selections',
                      'No one can receive information about upcoming selections',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-[#1A365D] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src={IMAGES.fairness}
                alt="Fairness and balance"
                className="rounded-2xl shadow-xl mx-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Fraud Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Anti-Fraud Commitment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain rigorous protocols to protect against fraud and ensure the integrity 
              of our operations.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800 text-lg mb-2">Important Fraud Warning</h3>
                <p className="text-red-700 leading-relaxed">
                  The Abbas Shafii Foundation will <strong>NEVER</strong> ask you for money, fees, 
                  or personal financial information. If anyone contacts you claiming to be from 
                  the foundation and requests payment, it is a scam. Please report such incidents 
                  to us immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Official Communications Only',
                description: 'All legitimate communications come from official @abbasshafii.com email addresses.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'No Fees Ever',
                description: 'We never charge fees for processing, taxes, or any other purpose. Grants are free.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Verified Channels',
                description: 'Selected recipients are contacted through secure, verified communication channels.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A365D]/10 flex items-center justify-center text-[#1A365D] mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Auditing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-6">
                  What We Audit
                </h3>
                <ul className="space-y-4">
                  {[
                    'Selection algorithm integrity and randomness',
                    'Financial disbursements and accounting',
                    'Compliance with international regulations',
                    'Operational processes and controls',
                    'Data security and privacy practices',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Independent Oversight
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our operations are subject to regular independent audits by certified third-party 
                  organizations. These audits verify the integrity of our selection process, the 
                  accuracy of our financial reporting, and our compliance with all applicable 
                  regulations.
                </p>
                <p>
                  Audit findings are reviewed by our board and key recommendations are implemented 
                  to continuously improve our operations. Summary audit reports will be made 
                  available to the public through our annual transparency reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Accountability */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Public Accountability
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in complete transparency with the public about our activities and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quarterly Reports',
                description: 'Detailed reports on each award cycle, including number of recipients and total disbursements.',
              },
              {
                title: 'Annual Reviews',
                description: 'Comprehensive annual reports covering all foundation activities and financial statements.',
              },
              {
                title: 'Impact Stories',
                description: 'With recipient consent, we share stories of how grants have created positive change.',
              },
              {
                title: 'Open Communication',
                description: 'We respond to public inquiries and maintain open channels for questions and feedback.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Statement */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
            Our Ethical Commitment
          </h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              The Abbas Shafii Foundation is committed to the highest standards of ethical 
              conduct in all our operations. We believe that philanthropy must be conducted 
              with integrity, transparency, and respect for the dignity of all individuals.
            </p>
            <p>
              We do not engage in any form of discrimination, favoritism, or bias. We do not 
              accept donations or partnerships that could compromise our independence or 
              integrity. We do not make promises we cannot keep.
            </p>
            <p>
              Our goal is simple: to help as many people as possible, as fairly as possible, 
              with complete transparency about how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
            Learn More About Our Work
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Discover how we're creating a new paradigm in global philanthropy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              How Our Giving Works
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransparencyPage;
