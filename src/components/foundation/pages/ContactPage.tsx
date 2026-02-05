import React, { useState } from 'react';
import { IMAGES } from '@/lib/constants';
import { supabase } from '@/lib/supabase';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to database
      await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        status: 'new',
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-medium mb-4">Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Have questions about the Abbas Shafii Foundation? We're here to help. 
              Reach out to our team for general inquiries, media requests, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-[#D4AF37]/10 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#2C2C2C]">Important Notice</p>
              <p className="text-gray-600 text-sm">
                The Abbas Shafii Foundation does not accept grant applications. Please do not submit 
                requests for funding through this contact form. For information about our giving 
                process, please visit our <button onClick={() => onNavigate('how-it-works')} className="text-[#1A365D] underline">How It Works</button> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-8">
                Foundation Headquarters
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">
                      Portland, Oregon<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">
                      General: info@abbasshafii.com<br />l
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Response Time</h3>
                    <p className="text-gray-600 text-sm">
                      We aim to respond to all inquiries within 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="mt-10">
                <img
                  src={IMAGES.headquarters}
                  alt="Foundation headquarters"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll respond within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#1A365D] font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="media">Media/Press Inquiry</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 text-[#1A365D] border-gray-300 rounded focus:ring-[#1A365D]"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I understand that the Abbas Shafii Foundation does not accept grant applications 
                        through this form and that my inquiry will be handled according to the foundation's 
                        privacy policy.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#1A365D] text-white font-semibold rounded-lg hover:bg-[#2C4A7C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
              Before You Contact Us
            </h2>
            <p className="text-gray-600">
              You may find answers to common questions in our FAQ or on these pages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'How Our Giving Works',
                description: 'Learn about our selection process and why we don\'t accept applications.',
                page: 'how-it-works',
              },
              {
                title: 'Grants & Eligibility',
                description: 'Information about grant amounts, eligibility, and award cycles.',
                page: 'grants',
              },
              {
                title: 'Transparency & Ethics',
                description: 'Our commitment to fairness, anti-fraud measures, and accountability.',
                page: 'transparency',
              },
              {
                title: 'About the Foundation',
                description: 'Our mission, values, and philosophy of giving.',
                page: 'about',
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate(item.page)}
                className="bg-white rounded-xl p-6 text-left border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-24 bg-[#1A365D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-white/80 text-lg mb-4">
            Our AI-powered assistant can answer common questions about the foundation instantly.
          </p>
          <p className="text-white/60 text-sm">
            Look for the chat icon in the bottom-right corner of your screen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
