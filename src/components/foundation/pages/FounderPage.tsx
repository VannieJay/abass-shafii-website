import React from 'react';
import { IMAGES } from '@/lib/constants';

interface FounderPageProps {
  onNavigate: (page: string) => void;
}

const FounderPage: React.FC<FounderPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Meet the Founder</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Abbas Shafii
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Philanthropist, visionary, and founder of the Abbas Shaffi Foundation. 
              Committed to transforming lives through strategic, transparent global giving.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <img
                  src={IMAGES.founder}
                  alt="Abbas Shafii"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-[#2C2C2C] mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Portland, Oregon, United States</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Philanthropist & Foundation Founder</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>$146.4M Committed to Philanthropy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Foundation Established 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl font-bold text-[#2C2C2C] mb-8">
                A Vision for Global Change
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  Abbas Shafii made history as the winner of Oregon's first Powerball jackpot of 2025, 
                  claiming a $328.5 million prize ($146.4 million after the lump sum option). Rather 
                  than viewing this windfall as merely personal fortune, Abbas saw it as an opportunity 
                  to create lasting, meaningful change in the world.
                </p>

                <p className="leading-relaxed mb-6">
                  Within weeks of claiming his prize, Abbas began laying the groundwork for what would 
                  become the Abbas Shaffi Foundation. His vision was clear from the start: create a 
                  philanthropic organization that would operate differently from traditional charities—one 
                  that would eliminate bias, ensure transparency, and reach those who need help most, 
                  regardless of their ability to navigate complex application processes.
                </p>

                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mt-10 mb-4">
                  The Philosophy Behind the Foundation
                </h3>

                <p className="leading-relaxed mb-6">
                  "I've seen how traditional philanthropy often fails to reach those who need it most," 
                  Abbas explains. "The application process itself becomes a barrier—favoring those with 
                  education, connections, and resources. I wanted to create something different. Something 
                  truly fair."
                </p>

                <p className="leading-relaxed mb-6">
                  This philosophy led to the foundation's unique approach: random selection. By removing 
                  the application process entirely and using cryptographically secure randomization to 
                  select recipients, the Abbas Shaffi Foundation ensures that a farmer in rural Kenya 
                  has the same chance of receiving support as a struggling entrepreneur in New York City.
                </p>

                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mt-10 mb-4">
                  Commitment to Ethical Wealth Redistribution
                </h3>

                <p className="leading-relaxed mb-6">
                  Abbas has committed a significant portion of his lottery winnings to the foundation, 
                  with plans for sustained giving over the coming decades. His approach to wealth 
                  redistribution is guided by several key principles:
                </p>

                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>
                    <strong>Transparency:</strong> Every aspect of the foundation's operations is 
                    documented and subject to independent oversight.
                  </li>
                  <li>
                    <strong>Fairness:</strong> The random selection process ensures equal opportunity 
                    for all eligible individuals worldwide.
                  </li>
                  <li>
                    <strong>Dignity:</strong> Recipients receive support without conditions or 
                    restrictions, trusting them to know best how to improve their own lives.
                  </li>
                  <li>
                    <strong>Impact:</strong> Grant amounts ($500,000 to $5,000,000) are designed to 
                    be truly life-changing, enabling recipients to create lasting positive change.
                  </li>
                </ul>

                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mt-10 mb-4">
                  Looking to the Future
                </h3>

                <p className="leading-relaxed mb-6">
                  As the foundation prepares for its first award cycle in Q1 2025, Abbas remains 
                  focused on building an institution that will outlast him—one that will continue 
                  to transform lives for generations to come.
                </p>

                <p className="leading-relaxed">
                  "This isn't about me," Abbas emphasizes. "It's about creating a new model for 
                  philanthropy—one that proves we can help people without bias, without bureaucracy, 
                  and without the barriers that have traditionally kept aid from reaching those who 
                  need it most. If we can demonstrate that this approach works, perhaps others will 
                  follow."
                </p>
              </div>

              {/* Quote Block */}
              <blockquote className="mt-12 p-8 bg-[#1A365D] rounded-2xl">
                <svg className="w-10 h-10 text-[#D4AF37] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white text-xl leading-relaxed italic mb-4">
                  "Wealth is not a measure of worth, but it can be a tool for change. I was given 
                  an extraordinary opportunity, and I intend to use it to create extraordinary impact. 
                  Every person on this planet deserves a chance to thrive."
                </p>
                <footer className="text-[#D4AF37] font-semibold">
                  — Abbas Shafii, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Founder's Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three pillars that guide the foundation's mission and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Uplift the Poor',
                description: 'Provide life-changing resources to individuals living in poverty, enabling them to build sustainable futures for themselves and their families.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ),
              },
              {
                title: 'Expand Sustainable Business',
                description: 'Support entrepreneurs and business owners in creating sustainable enterprises that generate employment and economic growth in their communities.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Restore Hope',
                description: 'Demonstrate that help can come from unexpected places, restoring faith in humanity and inspiring others to give generously.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
            Learn More About Our Work
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Discover how the Abbas Shaffi Foundation is creating a new paradigm in global philanthropy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              How Our Giving Works
            </button>
            <button
              onClick={() => onNavigate('grants')}
              className="px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              View Grant Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
