import React, { useState, useEffect } from 'react';
import { trackPageView } from './utils/analytics';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import TravelsPage from './pages/TravelsPage';

const validPages = ['home', 'work', 'travels'] as const;
type PageId = typeof validPages[number];

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '');
  return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
}

const pageComponents: Record<PageId, React.ComponentType<{ onNavigate?: (page: string) => void }>> = {
  home: HomePage,
  work: WorkPage,
  travels: TravelsPage,
};

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page as PageId);
    trackPageView(page);
  };

  const PageComponent = pageComponents[currentPage];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <PageComponent
        key={currentPage}
        {...(currentPage === 'home' ? { onNavigate: handleNavigate } : {})}
      />

      <footer className="py-8 px-6 border-t border-gray-100">
        <p className="text-left text-sm text-gray-400">
          &copy; {new Date().getFullYear()} angel tramontin
        </p>
      </footer>
    </div>
  );
}

export default App;
