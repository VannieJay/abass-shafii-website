import React from 'react';
import { IMAGES, PROCESS_STEPS, FAQ_ITEMS } from '@/lib/constants';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Our Process</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              How Our Giving Works
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A transparent, four-step process designed to ensure fairness, eliminate bias, 
              and deliver life-changing support to individuals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Applications',
                description: 'We do not accept applications. This eliminates barriers and ensures equal access for all.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                ),
              },
              {
                title: 'Random Selection',
                description: 'Recipients are chosen through cryptographically secure randomization.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: 'Full Transparency',
                description: 'Every aspect of our process is documented and independently audited.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Four-Step Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From eligibility to disbursement, every step is designed to ensure fairness and transparency.
            </p>
          </div>

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="w-14 h-14 rounded-full bg-[#1A365D] text-white flex items-center justify-center font-serif text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">{step.title}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why No Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Why We Don't Accept Applications
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Traditional grant applications create inherent biases. They favor individuals who:
                </p>
                <ul className="space-y-3">
                  {[
                    'Have access to education and can write compelling narratives',
                    'Understand bureaucratic processes and requirements',
                    'Have internet access and technological literacy',
                    'Speak the language of the granting organization',
                    'Have connections or references to support their applications',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  By eliminating applications entirely, we ensure that a subsistence farmer in rural 
                  Africa has exactly the same chance of receiving support as a tech entrepreneur in 
                  Silicon Valley. This is true equality of opportunity.
                </p>
              </div>
            </div>
            <div className="bg-[#1A365D] rounded-2xl p-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">What This Means for You</h3>
              <ul className="space-y-4">
                {[
                  'You cannot apply for a grant from the Abbas Shafii Foundation',
                  'There is no form to fill out, no essay to write, no references to provide',
                  'Your eligibility is based solely on being 18+ years old',
                  'Selection is completely random and cannot be influenced',
                  'If selected, you will be contacted through verified channels',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Random Selection Explained */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              How Random Selection Protects Integrity
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proprietary selection engine is designed to be impervious to manipulation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'No Internal Influence',
                description: 'Foundation staff, board members, and advisors cannot influence or access the selection process.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'No Favoritism',
                description: 'The algorithm treats every eligible individual identically, regardless of any personal characteristics.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: 'No External Pressure',
                description: 'The system cannot be lobbied, bribed, or influenced by any external party or organization.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'No Political Bias',
                description: 'Political affiliation, nationality, religion, and social status have zero impact on selection.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Disbursement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={IMAGES.headquarters}
                alt="Foundation headquarters"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                How Funds Are Disbursed
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Once a recipient is selected, our team initiates a careful verification and 
                  disbursement process designed to ensure funds reach the intended individual 
                  safely and securely.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Identity Verification',
                      description: 'We verify the recipient\'s identity through secure, privacy-respecting methods.',
                    },
                    {
                      title: 'Secure Communication',
                      description: 'All communication occurs through verified channels with encryption.',
                    },
                    {
                      title: 'Banking Coordination',
                      description: 'We work with international banking partners to ensure secure fund transfer.',
                    },
                    {
                      title: 'Compliance Documentation',
                      description: 'All disbursements comply with international financial regulations.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C]">{item.title}</h4>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our giving process.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[#2C2C2C]">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'pb-5 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Have More Questions?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our AI-powered assistant can answer your questions about the foundation, 
            eligibility, and our selection process in real-time.
          </p>
          <p className="text-white/60 text-sm">
            Look for the chat icon in the bottom-right corner of your screen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
