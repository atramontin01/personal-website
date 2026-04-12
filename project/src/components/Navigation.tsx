import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const pages = [
  { id: 'home', label: 'home' },
  { id: 'work', label: 'work' },
  { id: 'travels', label: 'travel' },
] as const;

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="px-6 py-3">
        <div className="flex items-center gap-2">
          {pages.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`px-4 py-2 min-h-[44px] min-w-[44px] text-sm rounded-md transition-colors duration-75 ${
                currentPage === id
                  ? 'text-gray-900 font-medium bg-gray-100'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
