import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAdmin } from './AdminContext';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'responded' | 'archived';
  notes: string | null;
  created_at: string;
}

const ContactSubmissions: React.FC = () => {
  const { hasPermission } = useAdmin();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'responded' | 'archived'>('all');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setContacts(data);
    }
    setIsLoading(false);
  };

  const handleStatusChange = async (id: string, status: Contact['status']) => {
    await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id);
    
    fetchContacts();
    if (selectedContact?.id === id) {
      setSelectedContact({ ...selectedContact, status });
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedContact) return;
    
    await supabase
      .from('contact_submissions')
      .update({ notes })
      .eq('id', selectedContact.id);
    
    setSelectedContact({ ...selectedContact, notes });
    fetchContacts();
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setNotes(contact.notes || '');
    
    // Mark as read if new
    if (contact.status === 'new') {
      handleStatusChange(contact.id, 'read');
    }
  };

  const filteredContacts = filter === 'all' 
    ? contacts 
    : contacts.filter(c => c.status === filter);

  const getSubjectLabel = (subject: string) => {
    const labels: Record<string, string> = {
      general: 'General Inquiry',
      media: 'Media/Press',
      partnership: 'Partnership',
      feedback: 'Feedback',
      other: 'Other',
    };
    return labels[subject] || subject;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-[#1A365D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 h-[calc(100vh-200px)]">
      {/* Contacts List */}
      <div className="w-1/2 flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Filter Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20"
          >
            <option value="all">All ({contacts.length})</option>
            <option value="new">New ({contacts.filter(c => c.status === 'new').length})</option>
            <option value="read">Read ({contacts.filter(c => c.status === 'read').length})</option>
            <option value="responded">Responded ({contacts.filter(c => c.status === 'responded').length})</option>
            <option value="archived">Archived ({contacts.filter(c => c.status === 'archived').length})</option>
          </select>
          <span className="text-xs text-gray-400">{filteredContacts.length} submissions</span>
        </div>

        {/* Contacts */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {filteredContacts.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No submissions found
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => handleViewContact(contact)}
                className={`w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors ${
                  selectedContact?.id === contact.id ? 'bg-[#1A365D]/5' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    {contact.status === 'new' && (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                    <span className="font-medium text-[#2C2C2C]">{contact.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(contact.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{contact.email}</p>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                    {getSubjectLabel(contact.subject)}
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    contact.status === 'new' 
                      ? 'bg-green-100 text-green-700' 
                      : contact.status === 'read'
                      ? 'bg-blue-100 text-blue-700'
                      : contact.status === 'responded'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {contact.status}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Contact Detail */}
      <div className="w-1/2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
        {selectedContact ? (
          <>
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#2C2C2C]">{selectedContact.name}</h2>
                  <p className="text-sm text-gray-500">{selectedContact.email}</p>
                </div>
                <select
                  value={selectedContact.status}
                  onChange={(e) => handleStatusChange(selectedContact.id, e.target.value as any)}
                  disabled={!hasPermission('editor')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg border-0 ${
                    selectedContact.status === 'new' 
                      ? 'bg-green-100 text-green-700' 
                      : selectedContact.status === 'read'
                      ? 'bg-blue-100 text-blue-700'
                      : selectedContact.status === 'responded'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="responded">Responded</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                <span>{getSubjectLabel(selectedContact.subject)}</span>
                <span>•</span>
                <span>{new Date(selectedContact.created_at).toLocaleString()}</span>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Message</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-[#2C2C2C] whitespace-pre-wrap">{selectedContact.message}</p>
              </div>

              {/* Notes */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Internal Notes</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  disabled={!hasPermission('editor')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] resize-none"
                  placeholder="Add internal notes about this submission..."
                />
                {hasPermission('editor') && (
                  <button
                    onClick={handleSaveNotes}
                    className="mt-2 px-4 py-2 bg-[#1A365D] text-white text-sm rounded-lg hover:bg-[#2C4A7C] transition-colors"
                  >
                    Save Notes
                  </button>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center space-x-4">
              <a
                href={`mailto:${selectedContact.email}?subject=Re: ${getSubjectLabel(selectedContact.subject)}`}
                className="flex-1 px-4 py-2 bg-[#1A365D] text-white text-center rounded-lg hover:bg-[#2C4A7C] transition-colors"
                onClick={() => handleStatusChange(selectedContact.id, 'responded')}
              >
                Reply via Email
              </a>
              <button
                onClick={() => handleStatusChange(selectedContact.id, 'archived')}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Archive
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>Select a submission to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSubmissions;
