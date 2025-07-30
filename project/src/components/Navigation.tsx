import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'home' },
    { id: 'work', label: 'work' },
    { id: 'life', label: 'life' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            angel tramontin
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            {pages.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`nav-link text-sm transition-all duration-300 ease-out relative group ${
                  currentPage === id 
                    ? 'text-gray-900 font-medium active' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {label}
                {/* Hover underline effect */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                  currentPage === id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                
                {/* Active indicator */}
                {currentPage === id && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}