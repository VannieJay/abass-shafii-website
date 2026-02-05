import React, { useState, useEffect } from 'react';
import { IMAGES, STATS, VALUES, PROCESS_STEPS } from '@/lib/constants';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to Q1 2025 end (March 31, 2025)
    const targetDate = new Date('2025-03-31T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    scale: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    globe: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Global communities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/95 via-[#1A365D]/80 to-[#1A365D]/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Launch Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
              <span className="text-[#D4AF37] text-sm font-medium">Launching First Award Cycle Q1 2025</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Strategic Giving.
              <br />
              <span className="text-[#D4AF37]">Zero Influence.</span>
              <br />
              Pure Impact.
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              The Abbas Shafii Foundation exists to uplift the poor, expand sustainable businesses, 
              restore hope to societies, and create meaningful change through transparent global giving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('how-it-works')}
                className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                How Our Giving Works
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                About the Foundation
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#1A365D]">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-[#1A365D] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">
            First Award Cycle Countdown
          </h2>
          <p className="text-white/70 mb-8">Q1 2025 recipients will be announced</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#D4AF37]">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="text-white/60 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to philanthropy eliminates bias and ensures every eligible individual 
              has an equal opportunity to receive life-changing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Applications',
                description: 'We don\'t accept applications. This eliminates the burden on those seeking help and removes any possibility of favoritism in the review process.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Random Selection',
                description: 'Our proprietary algorithm uses cryptographically secure randomization to select recipients, ensuring zero human influence or bias.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: 'Full Transparency',
                description: 'Every aspect of our process is documented and subject to independent audits. We publish quarterly reports on our activities and disbursements.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
                Our Core Values
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every decision we make is guided by these fundamental principles. They shape our 
                approach to giving and ensure we remain true to our mission of creating meaningful, 
                lasting change.
              </p>
              <div className="space-y-6">
                {VALUES.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                      {iconMap[value.icon]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.hope}
                alt="Hope and growth"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#1A365D] rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-[#D4AF37] font-serif text-2xl font-bold mb-2">$500K - $5M</p>
                <p className="text-white/80 text-sm">Individual grants awarded quarterly to transform lives worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              How Our Giving Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent, four-step process designed to ensure fairness and eliminate bias at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1A365D] text-white flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-gray-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              Learn More About Our Process
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.globalNetwork}
            alt="Global network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A365D]/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            A New Paradigm in Global Philanthropy
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Abbas Shafii Foundation represents a commitment to transparent, unbiased giving 
            that reaches those who need it most, regardless of their ability to navigate traditional 
            grant application processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('founder')}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              Meet the Founder
            </button>
            <button
              onClick={() => onNavigate('transparency')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Our Commitment to Transparency
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
