import React from 'react';
import { GRANT_TIERS } from '@/lib/constants';

interface GrantsPageProps {
  onNavigate: (page: string) => void;
}

const GrantsPage: React.FC<GrantsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Our Programs</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Grants & Donations
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Life-changing grants ranging from $500,000 to $5,000,000, awarded quarterly 
              to individuals worldwide through our transparent random selection process.
            </p>
          </div>
        </div>
      </section>

      {/* Grant Overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$500K - $5M', label: 'Grant Range' },
              { value: 'Quarterly', label: 'Award Frequency' },
              { value: '3-5', label: 'Recipients per Cycle' },
              { value: '12-20', label: 'Annual Recipients' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-3xl font-bold text-[#1A365D]">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Tiers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Grant Tiers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our grants are designed to create meaningful, lasting impact at every level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {GRANT_TIERS.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  index === 1
                    ? 'bg-[#1A365D] text-white ring-4 ring-[#D4AF37]/30'
                    : 'bg-white border border-gray-100'
                }`}
              >
                <div className="mb-6">
                  <p className={`text-sm font-medium mb-2 ${index === 1 ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>
                    {tier.name}
                  </p>
                  <p className={`font-serif text-3xl font-bold ${index === 1 ? 'text-white' : 'text-[#2C2C2C]'}`}>
                    {tier.amount}
                  </p>
                </div>
                <p className={`mb-6 ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${index === 1 ? 'text-[#D4AF37]' : 'text-[#1A365D]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our eligibility criteria are intentionally simple and inclusive. We believe 
                that opportunity should be available to everyone, regardless of background.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Age Requirement',
                    description: 'Must be 18 years of age or older at the time of selection.',
                  },
                  {
                    title: 'Global Eligibility',
                    description: 'Open to individuals in all 195+ countries worldwide.',
                  },
                  {
                    title: 'No Restrictions',
                    description: 'No restrictions based on profession, background, nationality, religion, or social status.',
                  },
                  {
                    title: 'No Applications',
                    description: 'There is no application process. Selection is entirely random.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C]">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A365D] rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Who Is NOT Eligible
              </h3>
              <ul className="space-y-4">
                {[
                  'Individuals under 18 years of age',
                  'Organizations, companies, or institutions (individuals only)',
                  'Foundation staff, board members, and their immediate families',
                  'Individuals with pending legal issues related to fraud',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Award Cycles */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Award Cycles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Grants are awarded quarterly, with 3-5 recipients selected each cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { quarter: 'Q1', months: 'January - March', status: 'Launching' },
              { quarter: 'Q2', months: 'April - June', status: 'Upcoming' },
              { quarter: 'Q3', months: 'July - September', status: 'Upcoming' },
              { quarter: 'Q4', months: 'October - December', status: 'Upcoming' },
            ].map((cycle, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 text-center ${
                  index === 0
                    ? 'bg-[#1A365D] text-white'
                    : 'bg-white border border-gray-100'
                }`}
              >
                <p className={`font-serif text-4xl font-bold mb-2 ${
                  index === 0 ? 'text-[#D4AF37]' : 'text-[#1A365D]'
                }`}>
                  {cycle.quarter}
                </p>
                <p className={index === 0 ? 'text-white/80' : 'text-gray-600'}>
                  {cycle.months}
                </p>
                <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  index === 0
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {cycle.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Usage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              What Recipients Can Use Funds For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe recipients are best positioned to know how to improve their own lives. 
              Grants come with no restrictions on usage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'Personal Stability', icon: '🏠' },
              { title: 'Education', icon: '📚' },
              { title: 'Healthcare', icon: '🏥' },
              { title: 'Business', icon: '💼' },
              { title: 'Community', icon: '🤝' },
              { title: 'Charitable Giving', icon: '💝' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-medium text-[#2C2C2C] text-sm">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#D4AF37]/10 rounded-xl">
            <p className="text-center text-[#2C2C2C]">
              <strong>Note:</strong> While we do not restrict fund usage, we encourage recipients 
              to use their grants responsibly and consider the long-term impact of their decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
              Compliance & Accountability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              All grant disbursements comply with international financial regulations, 
              including anti-money laundering (AML) and know-your-customer (KYC) requirements. 
              We work with established banking partners to ensure secure, compliant fund transfers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'AML Compliant', description: 'Anti-money laundering protocols' },
                { title: 'KYC Verified', description: 'Identity verification required' },
                { title: 'Audited', description: 'Independent financial audits' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#1A365D] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Grant Program?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Learn more about how our selection process works and our commitment to transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              How Selection Works
            </button>
            <button
              onClick={() => onNavigate('transparency')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Transparency & Ethics
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrantsPage;
