import React from 'react';
import { IMAGES, VALUES } from '@/lib/constants';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, React.ReactNode> = {
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    scale: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    globe: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">About the Foundation</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Redefining Global Philanthropy Through Transparent Giving
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              The Abbas Shaffi Foundation was established with a singular vision: to create 
              meaningful, lasting change in the lives of individuals worldwide through strategic, 
              unbiased, and transparent giving.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Abbas Shaffi Foundation exists to uplift the poor, expand sustainable businesses, 
                restore hope to societies, and create meaningful change through strategic global giving 
                and random acts of kindness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that opportunity should not be limited by geography, circumstance, or 
                access to traditional philanthropic channels. Our unique approach ensures that 
                anyone, anywhere in the world, has an equal chance to receive life-changing support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By removing the application process entirely, we eliminate barriers that often 
                prevent the most vulnerable from accessing help. Our random selection methodology 
                ensures that wealth reaches those who need it most, not just those who know how 
                to navigate complex grant systems.
              </p>
            </div>
            <div className="relative">
              <img
                src={IMAGES.hope}
                alt="Hope and growth"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Traditional philanthropy, while well-intentioned, often fails to reach those who 
              need it most due to systemic barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Global Poverty',
                description: 'Over 700 million people live in extreme poverty, often without access to traditional aid channels.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Lack of Opportunity',
                description: 'Millions lack access to education, healthcare, and economic opportunities that could transform their lives.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: 'Economic Stagnation',
                description: 'Communities worldwide struggle with economic stagnation, lacking the capital to build sustainable futures.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Loss of Hope',
                description: 'Perhaps most devastating is the loss of hope that comes from systemic barriers to advancement.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  {iconMap[value.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Our Philosophy of Giving
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                We believe that true philanthropy should be free from the biases and barriers 
                that often characterize traditional giving. By removing the application process, 
                we ensure that help reaches those who need it most—not just those who know how 
                to ask for it.
              </p>
              <p>
                Our random selection methodology is not arbitrary; it is a deliberate choice to 
                create a level playing field where a farmer in rural Africa has the same chance 
                as an entrepreneur in urban America.
              </p>
              <p>
                We trust in the inherent dignity and capability of every individual. When we 
                provide resources, we do so without conditions or restrictions, believing that 
                recipients are best positioned to know how to improve their own lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Random Selection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={IMAGES.fairness}
                alt="Fairness and balance"
                className="rounded-2xl shadow-xl mx-auto max-w-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Why Random Selection Ensures Fairness
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Traditional grant applications favor those with education, resources, and 
                  connections. Our random selection process eliminates these advantages, 
                  ensuring true equality of opportunity.
                </p>
                <p>
                  By using cryptographically secure randomization, we guarantee that no 
                  individual—including foundation staff—can influence who receives support. 
                  This protects against favoritism, corruption, and external pressure.
                </p>
                <p>
                  Our system is designed to be impervious to manipulation. It cannot be 
                  lobbied, bribed, or influenced. The only criteria are age (18+) and 
                  being a human being on this planet.
                </p>
              </div>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="mt-8 px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors"
              >
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
            Join Us in Redefining Philanthropy
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Learn more about our founder's vision and commitment to transparent global giving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('founder')}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              Meet Abbas Shafii
            </button>
            <button
              onClick={() => onNavigate('transparency')}
              className="px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              Our Transparency Commitment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
