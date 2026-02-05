import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAdmin } from './AdminContext';

interface Report {
  id: string;
  title: string;
  quarter: string;
  year: number;
  summary: string | null;
  content: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
}

const ReportsManager: React.FC = () => {
  const { hasPermission } = useAdmin();
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingReport, setEditingReport] = useState<Partial<Report> | null>(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const { data, error } = await supabase
      .from('quarterly_reports')
      .select('*')
      .order('year', { ascending: false })
      .order('quarter', { ascending: false });

    if (!error && data) {
      setReports(data);
    }
    setIsLoading(false);
  };

  const handleSave = async () => {
    if (!editingReport?.title || !editingReport?.quarter || !editingReport?.year) return;

    const reportData = {
      title: editingReport.title,
      quarter: editingReport.quarter,
      year: editingReport.year,
      summary: editingReport.summary || '',
      content: editingReport.content || '',
      status: editingReport.status || 'draft',
      published_at: editingReport.status === 'published' ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    if (editingReport.id) {
      await supabase
        .from('quarterly_reports')
        .update(reportData)
        .eq('id', editingReport.id);
    } else {
      await supabase
        .from('quarterly_reports')
        .insert(reportData);
    }

    setIsEditing(false);
    setEditingReport(null);
    fetchReports();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this report?')) return;
    
    await supabase
      .from('quarterly_reports')
      .delete()
      .eq('id', id);
    
    fetchReports();
  };

  const handlePublish = async (id: string) => {
    await supabase
      .from('quarterly_reports')
      .update({ 
        status: 'published', 
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', id);
    
    fetchReports();
  };

  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const years = [2025, 2026, 2027, 2028, 2029, 2030];

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
            {editingReport?.id ? 'Edit Report' : 'Create New Report'}
          </h2>
          <button
            onClick={() => { setIsEditing(false); setEditingReport(null); }}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Title *</label>
            <input
              type="text"
              value={editingReport?.title || ''}
              onChange={(e) => setEditingReport({ ...editingReport, title: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D]"
              placeholder="e.g., Q1 2025 Transparency Report"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quarter *</label>
              <select
                value={editingReport?.quarter || 'Q1'}
                onChange={(e) => setEditingReport({ ...editingReport, quarter: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] bg-white"
              >
                {quarters.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
              <select
                value={editingReport?.year || 2025}
                onChange={(e) => setEditingReport({ ...editingReport, year: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] bg-white"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={editingReport?.status || 'draft'}
                onChange={(e) => setEditingReport({ ...editingReport, status: e.target.value as any })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] bg-white"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Executive Summary</label>
            <textarea
              value={editingReport?.summary || ''}
              onChange={(e) => setEditingReport({ ...editingReport, summary: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] resize-none"
              placeholder="Brief summary of the report highlights..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Report Content</label>
            <textarea
              value={editingReport?.content || ''}
              onChange={(e) => setEditingReport({ ...editingReport, content: e.target.value })}
              rows={12}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] resize-none"
              placeholder="Full report content..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => { setIsEditing(false); setEditingReport(null); }}
              className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#1A365D] text-white rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              {editingReport?.id ? 'Update Report' : 'Create Report'}
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
        <div>
          <p className="text-gray-500">
            {reports.filter(r => r.status === 'published').length} published, {reports.filter(r => r.status === 'draft').length} drafts
          </p>
        </div>
        {hasPermission('editor') && (
          <button
            onClick={() => { setIsEditing(true); setEditingReport({ quarter: 'Q1', year: 2025 }); }}
            className="px-4 py-2 bg-[#1A365D] text-white rounded-lg hover:bg-[#2C4A7C] transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Report</span>
          </button>
        )}
      </div>

      {/* Reports Grid */}
      {reports.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No Reports Yet</h3>
          <p className="text-gray-400 mb-6">Create your first quarterly transparency report.</p>
          {hasPermission('editor') && (
            <button
              onClick={() => { setIsEditing(true); setEditingReport({ quarter: 'Q1', year: 2025 }); }}
              className="px-6 py-2 bg-[#1A365D] text-white rounded-lg hover:bg-[#2C4A7C] transition-colors"
            >
              Create First Report
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium rounded">
                      {report.quarter} {report.year}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    report.status === 'published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{report.title}</h3>
                {report.summary && (
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{report.summary}</p>
                )}
                <p className="text-xs text-gray-400">
                  Created {new Date(report.created_at).toLocaleDateString()}
                </p>
              </div>
              
              {hasPermission('editor') && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => { setEditingReport(report); setIsEditing(true); }}
                      className="p-2 text-gray-400 hover:text-[#1A365D] transition-colors"
                      title="Edit"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(report.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  {report.status === 'draft' && (
                    <button
                      onClick={() => handlePublish(report.id)}
                      className="px-4 py-1.5 bg-[#1A365D] text-white text-sm rounded-lg hover:bg-[#2C4A7C] transition-colors"
                    >
                      Publish
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportsManager;
