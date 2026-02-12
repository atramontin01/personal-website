import React, { useState, useEffect } from 'react';
import { trackPageView } from './utils/analytics';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import TravelsPage from './pages/TravelsPage';

const validPages = ['home', 'work', 'travels'];

function getPageFromHash(): string {
  const hash = window.location.hash.replace('#', '');
  return validPages.includes(hash) ? hash : 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
    trackPageView(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage />;
      case 'travels':
        return <TravelsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="text-left text-gray-500">
          <p>&copy; {new Date().getFullYear()} angel tramontin. all rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;