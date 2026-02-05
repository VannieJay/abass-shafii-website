import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

interface AdminUser {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'editor' | 'viewer';
}

interface AdminContextType {
  user: AdminUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasPermission: (requiredRole: 'admin' | 'editor' | 'viewer') => boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ROLE_HIERARCHY = { admin: 3, editor: 2, viewer: 1 };

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedSession = localStorage.getItem('admin_session');
    if (storedSession) {
      try {
        const session = JSON.parse(storedSession);
        if (new Date(session.expiresAt) > new Date()) {
          validateSession(session.token, session.userId);
        } else {
          localStorage.removeItem('admin_session');
          setIsLoading(false);
        }
      } catch {
        localStorage.removeItem('admin_session');
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const validateSession = async (token: string, userId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('admin-auth', {
        body: { action: 'validate', token, userId }
      });

      if (error || !data?.valid) {
        localStorage.removeItem('admin_session');
        setUser(null);
      } else {
        setUser(data.user);
      }
    } catch {
      localStorage.removeItem('admin_session');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.functions.invoke('admin-auth', {
        body: { action: 'login', email, password }
      });

      if (error) {
        return { success: false, error: 'Authentication failed' };
      }

      if (data?.error) {
        return { success: false, error: data.error };
      }

      if (data?.success && data?.user) {
        localStorage.setItem('admin_session', JSON.stringify({
          token: data.token,
          userId: data.user.id,
          expiresAt: data.expiresAt
        }));
        setUser(data.user);
        return { success: true };
      }

      return { success: false, error: 'Invalid response from server' };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    setUser(null);
  };

  const hasPermission = (requiredRole: 'admin' | 'editor' | 'viewer'): boolean => {
    if (!user) return false;
    return ROLE_HIERARCHY[user.role] >= ROLE_HIERARCHY[requiredRole];
  };

  return (
    <AdminContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      logout,
      hasPermission
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
