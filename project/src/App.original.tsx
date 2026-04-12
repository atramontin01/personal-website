import React, { useState } from 'react';
import { trackPageView } from './utils/analytics';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import LifePage from './pages/LifePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    trackPageView(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage />;
      case 'life':
        return <LifePage />;
      case 'contact':
        return <ContactPage />;
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