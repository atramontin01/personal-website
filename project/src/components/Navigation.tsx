import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'home' },
    { id: 'work', label: 'work' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="px-6 py-4">
        <div className="flex items-center justify-start">
          <div className="flex space-x-8">
            {pages.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`text-sm transition-colors duration-200 ${
                  currentPage === id 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}