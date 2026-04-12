import React, { useState } from 'react';
import { trackPageView } from './utils/analytics';
import NavigationEnhanced from './components/NavigationEnhanced';
import HomePageEnhanced from './pages/HomePageEnhanced';
import WorkPage from './pages/WorkPage';
import LifePageEnhanced from './pages/LifePageEnhanced';
import ContactPage from './pages/ContactPage';
import './styles/animations.css';

function AppEnhanced() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(page);
      trackPageView(page);
      setIsTransitioning(false);
    }, 150);
  };

  const renderPage = () => {
    const pageClass = `transition-all duration-300 ${
      isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
    }`;
    
    switch (currentPage) {
      case 'home':
        return (
          <div className={pageClass}>
            <HomePageEnhanced onNavigate={handleNavigate} />
          </div>
        );
      case 'work':
        return (
          <div className={pageClass}>
            <WorkPage />
          </div>
        );
      case 'life':
        return (
          <div className={pageClass}>
            <LifePageEnhanced />
          </div>
        );
      case 'contact':
        return (
          <div className={pageClass}>
            <ContactPage />
          </div>
        );
      default:
        return (
          <div className={pageClass}>
            <HomePageEnhanced onNavigate={handleNavigate} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationEnhanced currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Page content with loading state */}
      <main className="relative">
        {isTransitioning && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
            <div className="loading-skeleton w-32 h-1 rounded-full"></div>
          </div>
        )}
        
        {renderPage()}
      </main>
      
      {/* Enhanced Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="text-left mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} angel tramontin. all rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/angeltramontin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300 interactive-element"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/atramontin01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300 interactive-element"
              >
                GitHub
              </a>
              <button
                onClick={() => handleNavigate('contact')}
                className="hover:text-gray-700 transition-colors duration-300 interactive-element"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppEnhanced;