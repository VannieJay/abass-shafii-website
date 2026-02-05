import React from 'react';
import { NEWS_ARTICLES } from '@/lib/constants';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = ['All', ...Array.from(new Set(NEWS_ARTICLES.map((a) => a.category)))];

  const filteredArticles = selectedCategory === 'All'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Stay Informed</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              News & Announcements
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              The latest updates from the Abbas Shaffi Foundation, including program announcements, 
              award cycle updates, and stories of impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Announcement */}
      <section className="py-16 bg-[#D4AF37]/10 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
            <span className="text-[#D4AF37] font-medium text-sm">Featured Announcement</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
                First Award Cycle Launching Q1 2025
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Abbas Shaffi Foundation is proud to announce the launch of our inaugural 
                award cycle. Beginning in Q1 2025, we will select 3-5 recipients to receive 
                life-changing grants ranging from $500,000 to $5,000,000. This marks the 
                beginning of our mission to transform lives through transparent, unbiased giving.
              </p>
              <button
                onClick={() => onNavigate('grants')}
                className="px-6 py-3 bg-[#1A365D] text-white font-medium rounded-lg hover:bg-[#2C4A7C] transition-colors"
              >
                Learn About Our Grants
              </button>
            </div>
            <div className="bg-[#1A365D] rounded-2xl p-8 text-center">
              <p className="text-[#D4AF37] text-sm font-medium mb-2">Award Cycle</p>
              <p className="font-serif text-5xl font-bold text-white mb-2">Q1</p>
              <p className="text-white/60">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#1A365D] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-[#1A365D]/10 text-[#1A365D] text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <button className="text-[#1A365D] font-medium text-sm flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Upcoming Milestones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key dates and events in the foundation's journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: 'Q1 2025',
                title: 'First Award Cycle',
                description: 'Selection and announcement of our first 3-5 grant recipients.',
              },
              {
                date: 'Q2 2025',
                title: 'Second Award Cycle',
                description: 'Continuation of quarterly giving with expanded global reach.',
              },
              {
                date: 'Q4 2025',
                title: 'Annual Report',
                description: 'Publication of our first annual transparency and impact report.',
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100">
                <p className="text-[#D4AF37] font-medium text-sm mb-2">{event.date}</p>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Subscribe to receive foundation updates, award announcements, and impact stories.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing! You will receive updates at your email address.');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#D4AF37] text-[#1A365D] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/50 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">
            Media Inquiries
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            For press inquiries, interview requests, or media resources, please contact our 
            communications team.
          </p>
          <div className="inline-flex items-center space-x-3 text-[#1A365D]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">press@abbasshaffifoundation.org</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
