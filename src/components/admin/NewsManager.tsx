import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAdmin } from './AdminContext';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
}

const NewsManager: React.FC = () => {
  const { hasPermission } = useAdmin();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);
  const [filter, setFilter] = useState<'all' | 'draft' | 'published' | 'archived'>('all');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setArticles(data);
    }
    setIsLoading(false);
  };

  const handleSave = async () => {
    if (!editingArticle?.title || !editingArticle?.excerpt) return;

    const articleData = {
      title: editingArticle.title,
      excerpt: editingArticle.excerpt,
      content: editingArticle.content || '',
      category: editingArticle.category || 'Announcement',
      status: editingArticle.status || 'draft',
      published_at: editingArticle.status === 'published' ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    if (editingArticle.id) {
      // Update existing
      await supabase
        .from('news_articles')
        .update(articleData)
        .eq('id', editingArticle.id);
    } else {
      // Create new
      await supabase
        .from('news_articles')
        .insert(articleData);
    }

    setIsEditing(false);
    setEditingArticle(null);
    fetchArticles();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    
    await supabase
      .from('news_articles')
      .delete()
      .eq('id', id);
    
    fetchArticles();
  };

  const handleStatusChange = async (id: string, status: 'draft' | 'published' | 'archived') => {
    await supabase
      .from('news_articles')
      .update({ 
        status, 
        published_at: status === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);
    
    fetchArticles();
  };

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => a.status === filter);

  const categories = ['Announcement', 'Program Update', 'Transparency', 'Foundation News', 'Impact Story'];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-[#1A365D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C]">
            {editingArticle?.id ? 'Edit Article' : 'Create New Article'}
          </h2>
          <button
            onClick={() => { setIsEditing(false); setEditingArticle(null); }}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input
              type="text"
              value={editingArticle?.title || ''}
              onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D]"
              placeholder="Article title"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={editingArticle?.category || 'Announcement'}
                onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={editingArticle?.status || 'draft'}
                onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value as any })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] bg-white"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
            <textarea
              value={editingArticle?.excerpt || ''}
              onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] resize-none"
              placeholder="Brief summary of the article"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Content</label>
            <textarea
              value={editingArticle?.content || ''}
              onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
              rows={10}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] resize-none"
              placeholder="Full article content..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => { setIsEditing(false); setEditingArticle(null); }}
              className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#1A365D] text-white rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              {editingArticle?.id ? 'Update Article' : 'Create Article'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20"
          >
            <option value="all">All Articles ({articles.length})</option>
            <option value="published">Published ({articles.filter(a => a.status === 'published').length})</option>
            <option value="draft">Drafts ({articles.filter(a => a.status === 'draft').length})</option>
            <option value="archived">Archived ({articles.filter(a => a.status === 'archived').length})</option>
          </select>
        </div>
        {hasPermission('editor') && (
          <button
            onClick={() => { setIsEditing(true); setEditingArticle({}); }}
            className="px-4 py-2 bg-[#1A365D] text-white rounded-lg hover:bg-[#2C4A7C] transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Article</span>
          </button>
        )}
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredArticles.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                  No articles found
                </td>
              </tr>
            ) : (
              filteredArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#2C2C2C] line-clamp-1">{article.title}</p>
                    <p className="text-sm text-gray-400 line-clamp-1">{article.excerpt}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={article.status}
                      onChange={(e) => handleStatusChange(article.id, e.target.value as any)}
                      disabled={!hasPermission('editor')}
                      className={`px-2 py-1 text-xs font-medium rounded border-0 ${
                        article.status === 'published' 
                          ? 'bg-green-100 text-green-700' 
                          : article.status === 'draft'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(article.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      {hasPermission('editor') && (
                        <>
                          <button
                            onClick={() => { setEditingArticle(article); setIsEditing(true); }}
                            className="p-2 text-gray-400 hover:text-[#1A365D] transition-colors"
                            title="Edit"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsManager;
