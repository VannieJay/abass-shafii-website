import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Stats {
  totalArticles: number;
  publishedArticles: number;
  newContacts: number;
  totalContacts: number;
  aiConversations: number;
  recentEvents: number;
}

const DashboardOverview: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalArticles: 0,
    publishedArticles: 0,
    newContacts: 0,
    totalContacts: 0,
    aiConversations: 0,
    recentEvents: 0,
  });
  const [recentContacts, setRecentContacts] = useState<any[]>([]);
  const [recentArticles, setRecentArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch articles stats
      const { data: articles } = await supabase
        .from('news_articles')
        .select('id, status');
      
      // Fetch contacts stats
      const { data: contacts } = await supabase
        .from('contact_submissions')
        .select('id, status, created_at, name, email, subject')
        .order('created_at', { ascending: false })
        .limit(5);

      // Fetch AI conversations count
      const { data: conversations } = await supabase
        .from('ai_conversations')
        .select('id');

      // Fetch recent articles
      const { data: recentNews } = await supabase
        .from('news_articles')
        .select('id, title, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalArticles: articles?.length || 0,
        publishedArticles: articles?.filter(a => a.status === 'published').length || 0,
        newContacts: contacts?.filter(c => c.status === 'new').length || 0,
        totalContacts: contacts?.length || 0,
        aiConversations: conversations?.length || 0,
        recentEvents: 0,
      });

      setRecentContacts(contacts || []);
      setRecentArticles(recentNews || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-[#1A365D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const statCards = [
    {
      label: 'Published Articles',
      value: stats.publishedArticles,
      total: stats.totalArticles,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: 'bg-blue-500',
    },
    {
      label: 'New Contact Submissions',
      value: stats.newContacts,
      total: stats.totalContacts,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-green-500',
    },
    {
      label: 'AI Conversations',
      value: stats.aiConversations,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: 'bg-purple-500',
    },
    {
      label: 'Award Cycle Status',
      value: 'Q1 2025',
      subtitle: 'Launching',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-[#D4AF37]',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                <div className={`${stat.color.replace('bg-', 'text-')}`}>{stat.icon}</div>
              </div>
              {stat.total !== undefined && (
                <span className="text-xs text-gray-400">of {stat.total} total</span>
              )}
            </div>
            <p className="text-2xl font-bold text-[#2C2C2C]">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
            {stat.subtitle && (
              <span className="inline-block mt-2 px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium rounded">
                {stat.subtitle}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-[#2C2C2C]">Recent Contact Submissions</h2>
            <span className="text-xs text-gray-400">Last 5</span>
          </div>
          <div className="divide-y divide-gray-50">
            {recentContacts.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-400">
                No contact submissions yet
              </div>
            ) : (
              recentContacts.map((contact) => (
                <div key={contact.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-[#2C2C2C]">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.email}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      contact.status === 'new' 
                        ? 'bg-green-100 text-green-700' 
                        : contact.status === 'read'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 capitalize">{contact.subject}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-[#2C2C2C]">Recent Articles</h2>
            <span className="text-xs text-gray-400">Last 5</span>
          </div>
          <div className="divide-y divide-gray-50">
            {recentArticles.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-400">
                No articles yet
              </div>
            ) : (
              recentArticles.map((article) => (
                <div key={article.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-[#2C2C2C] line-clamp-1 flex-1 mr-4">{article.title}</p>
                    <span className={`px-2 py-1 text-xs font-medium rounded flex-shrink-0 ${
                      article.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : article.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {article.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold text-[#2C2C2C] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Create Article', icon: '📝' },
            { label: 'View Contacts', icon: '📧' },
            { label: 'AI Analytics', icon: '🤖' },
            { label: 'Publish Report', icon: '📊' },
          ].map((action, index) => (
            <button
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:border-[#1A365D] hover:bg-[#1A365D]/5 transition-colors text-center"
            >
              <span className="text-2xl mb-2 block">{action.icon}</span>
              <span className="text-sm text-gray-600">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
