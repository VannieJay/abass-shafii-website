import React, { useState, useEffect } from 'react';
import Navigation from './foundation/Navigation';
import Footer from './foundation/Footer';
import AIAssistant from './foundation/AIAssistant';
import HomePage from './foundation/pages/HomePage';
import AboutPage from './foundation/pages/AboutPage';
import FounderPage from './foundation/pages/FounderPage';
import HowItWorksPage from './foundation/pages/HowItWorksPage';
import GrantsPage from './foundation/pages/GrantsPage';
import TransparencyPage from './foundation/pages/TransparencyPage';
import NewsPage from './foundation/pages/NewsPage';
import ContactPage from './foundation/pages/ContactPage';
import { AdminProvider, useAdmin } from './admin/AdminContext';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const AdminSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { isAuthenticated, isLoading } = useAdmin();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#1A365D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onBack={onBack} />;
  }

  return <AdminDashboard onBack={onBack} />;
};

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page from hash
    const initialPath = window.location.hash.replace('#', '') || 'home';
    setCurrentPage(initialPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL hash when page changes
  useEffect(() => {
    window.history.pushState(null, '', `#${currentPage}`);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'founder':
        return <FounderPage onNavigate={handleNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'grants':
        return <GrantsPage onNavigate={handleNavigate} />;
      case 'transparency':
        return <TransparencyPage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'admin':
        return (
          <AdminProvider>
            <AdminSection onBack={() => handleNavigate('home')} />
          </AdminProvider>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // If on admin page, render without main site layout
  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
        {renderPage()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default AppLayout;
