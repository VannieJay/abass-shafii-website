import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Conversation {
  id: string;
  session_id: string;
  user_message: string;
  assistant_response: string;
  created_at: string;
}

const ConversationLogs: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    const { data, error } = await supabase
      .from('ai_conversations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(500);

    if (!error && data) {
      setConversations(data);
    }
    setIsLoading(false);
  };

  // Group conversations by session
  const sessionGroups = conversations.reduce((acc, conv) => {
    if (!acc[conv.session_id]) {
      acc[conv.session_id] = [];
    }
    acc[conv.session_id].push(conv);
    return acc;
  }, {} as Record<string, Conversation[]>);

  const sessions = Object.entries(sessionGroups).map(([sessionId, convs]) => ({
    sessionId,
    conversations: convs.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()),
    lastActivity: convs[convs.length - 1].created_at,
    messageCount: convs.length,
  })).sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());

  const filteredSessions = searchQuery
    ? sessions.filter(s => 
        s.conversations.some(c => 
          c.user_message.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.assistant_response.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : sessions;

  const selectedSessionData = selectedSession 
    ? sessionGroups[selectedSession] 
    : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-[#1A365D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#1A365D]">{conversations.length}</p>
          <p className="text-sm text-gray-500">Total Messages</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#1A365D]">{sessions.length}</p>
          <p className="text-sm text-gray-500">Unique Sessions</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#1A365D]">
            {sessions.length > 0 ? (conversations.length / sessions.length).toFixed(1) : 0}
          </p>
          <p className="text-sm text-gray-500">Avg. Messages per Session</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 h-[calc(100vh-350px)]">
        {/* Sessions List */}
        <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20"
              />
            </div>
          </div>

          {/* Sessions */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {filteredSessions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                {searchQuery ? 'No matching conversations' : 'No conversations yet'}
              </div>
            ) : (
              filteredSessions.map((session) => (
                <button
                  key={session.sessionId}
                  onClick={() => setSelectedSession(session.sessionId)}
                  className={`w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors ${
                    selectedSession === session.sessionId ? 'bg-[#1A365D]/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-medium text-[#2C2C2C] text-sm">
                      Session {session.sessionId.slice(0, 8)}...
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(session.lastActivity).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1 mb-2">
                    {session.conversations[0]?.user_message}
                  </p>
                  <span className="px-2 py-0.5 bg-[#1A365D]/10 text-[#1A365D] text-xs rounded">
                    {session.messageCount} messages
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Conversation Detail */}
        <div className="w-2/3 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
          {selectedSessionData ? (
            <>
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#2C2C2C]">
                  Session {selectedSession?.slice(0, 8)}...
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedSessionData.length} messages • Started {new Date(selectedSessionData[0].created_at).toLocaleString()}
                </p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {selectedSessionData.map((conv) => (
                  <div key={conv.id} className="space-y-4">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-[#1A365D] text-white rounded-2xl rounded-br-md px-4 py-3">
                        <p className="text-sm">{conv.user_message}</p>
                        <p className="text-xs text-white/50 mt-1">
                          {new Date(conv.created_at).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>

                    {/* Assistant Response */}
                    <div className="flex justify-start">
                      <div className="max-w-[80%] bg-gray-100 text-[#2C2C2C] rounded-2xl rounded-bl-md px-4 py-3">
                        <p className="text-sm whitespace-pre-wrap">{conv.assistant_response}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <p>Select a session to view conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationLogs;
