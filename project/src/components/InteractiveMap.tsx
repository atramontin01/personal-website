import React, { useState } from 'react';

interface Location {
  id: string;
  name: string;
  country: string;
  description: string;
  coordinates: { x: number; y: number };
  type: 'lived' | 'visited' | 'current';
}

const locations: Location[] = [
  {
    id: 'sf',
    name: 'San Francisco',
    country: 'USA',
    description: 'Currently living here during my MBA at UC Berkeley Haas',
    coordinates: { x: 15, y: 35 },
    type: 'current'
  },
  {
    id: 'venezuela',
    name: 'Caracas',
    country: 'Venezuela',
    description: 'Family roots - parents immigrated from here',
    coordinates: { x: 35, y: 60 },
    type: 'visited'
  },
  {
    id: 'lebanon',
    name: 'Beirut',
    country: 'Lebanon',
    description: 'Grandparents heritage from Lebanon',
    coordinates: { x: 60, y: 40 },
    type: 'visited'
  },
  {
    id: 'italy',
    name: 'Rome',
    country: 'Italy',
    description: 'Italian heritage from grandparents',
    coordinates: { x: 55, y: 35 },
    type: 'visited'
  }
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'current': return '#10b981'; // green
      case 'lived': return '#3b82f6'; // blue
      case 'visited': return '#f59e0b'; // amber
      default: return '#6b7280'; // gray
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Places That Shaped Me</h3>
        
        {/* World Map SVG */}
        <div className="relative bg-gray-50 rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)' }}
          >
            {/* Simple world map outline */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="60" fill="url(#grid)" />
            
            {/* Continents as simple shapes */}
            <g fill="#d1d5db" opacity="0.6">
              {/* North America */}
              <path d="M 5,20 Q 10,15 20,18 Q 25,22 30,25 Q 28,35 25,40 Q 15,42 10,38 Q 5,32 5,20 Z" />
              
              {/* South America */}
              <path d="M 22,45 Q 30,42 35,48 Q 38,58 32,62 Q 25,60 22,55 Q 20,50 22,45 Z" />
              
              {/* Europe */}
              <path d="M 45,15 Q 55,12 58,20 Q 56,28 50,30 Q 45,25 45,15 Z" />
              
              {/* Africa */}
              <path d="M 48,30 Q 58,32 60,45 Q 55,55 50,52 Q 45,45 48,30 Z" />
              
              {/* Asia */}
              <path d="M 60,15 Q 80,10 85,25 Q 82,35 75,30 Q 65,28 60,15 Z" />
            </g>
            
            {/* Location markers */}
            {locations.map((location) => (
              <g key={location.id}>
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r={hoveredLocation?.id === location.id ? "1.5" : "1"}
                  fill={getMarkerColor(location.type)}
                  className="cursor-pointer transition-all duration-300 hover:scale-125"
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setSelectedLocation(location)}
                />
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r="2.5"
                  fill={getMarkerColor(location.type)}
                  opacity="0.3"
                  className="animate-ping"
                  style={{
                    animationDuration: location.type === 'current' ? '2s' : '4s'
                  }}
                />
              </g>
            ))}
          </svg>
          
          {/* Hover tooltip */}
          {hoveredLocation && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
              <h4 className="font-medium text-gray-900">{hoveredLocation.name}</h4>
              <p className="text-sm text-gray-600">{hoveredLocation.country}</p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Currently living</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">Lived</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-gray-600">Heritage/Visited</span>
          </div>
        </div>

        {/* Selected location details */}
        {selectedLocation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-gray-900">{selectedLocation.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{selectedLocation.country}</p>
                <p className="text-gray-700">{selectedLocation.description}</p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}