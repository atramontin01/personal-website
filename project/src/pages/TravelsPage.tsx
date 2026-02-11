import React, { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { X } from 'lucide-react';
import { travelLocations, getTravelYears, TravelLocation } from '../data/travels';
import { useFabricTilt } from '../hooks/useFabricTilt';
import topology from 'world-atlas/countries-110m.json';

export default function TravelsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<TravelLocation | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);
  const { containerRef, handleMouseMove: handleTiltMove, handleMouseLeave: handleTiltLeave, style: tiltStyle } = useFabricTilt(6);

  const years = useMemo(() => getTravelYears(), []);

  const filteredLocations = useMemo(() => {
    if (selectedYear === null) return travelLocations;
    return travelLocations.filter(loc => loc.year === selectedYear);
  }, [selectedYear]);

  const handleMarkerHover = (loc: TravelLocation, e: React.MouseEvent) => {
    setHoveredLocation(loc);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMapMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleTiltMove(e);
    if (hoveredLocation) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="pt-20 min-h-screen text-left">
      {/* Header with title and filters */}
      <div className="px-6">
        <div className="max-w-4xl">
          <div className="pt-16">
            <p className="text-base italic text-gray-500 mb-6 max-w-lg leading-relaxed -mt-2">
              "All of the things I need for happiness: Low plastic stool, check. Tiny little plastic table, check. Something delicious in a bowl, check."
              <span className="not-italic"> –Anthony Bourdain</span>
            </p>

            {/* Year slider */}
            <div className="flex items-center gap-1 mb-6">
              {[null, ...years].map((year, index) => {
                const isActive = selectedYear === year;
                return (
                  <React.Fragment key={year ?? 'all'}>
                    {index > 0 && (
                      <div className="w-4 h-px bg-gray-200" />
                    )}
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1 text-sm transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-300 hover:text-gray-500'
                      }`}
                    >
                      {year ?? 'all'}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width map */}
      <div
        ref={containerRef}
        onMouseMove={handleMapMouseMove}
        onMouseLeave={() => {
          handleTiltLeave();
          setHoveredLocation(null);
        }}
        style={tiltStyle}
        className="w-full"
      >
        <ComposableMap
          projectionConfig={{ scale: 210, center: [10, 20] }}
          style={{ width: '100%', height: 'auto' }}
          width={980}
          height={500}
        >
          <ZoomableGroup>
            <Geographies geography={topology}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e5e5e5"
                    stroke="#d4d4d4"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#d4d4d4' },
                      pressed: { outline: 'none' }
                    }}
                  />
                ))
              }
            </Geographies>

            {filteredLocations.map(loc => (
              <Marker
                key={loc.id}
                coordinates={loc.coordinates}
                onMouseEnter={(e) => handleMarkerHover(loc, e as unknown as React.MouseEvent)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => setSelectedLocation(loc)}
                style={{ cursor: 'pointer' }}
              >
                {/* Thumbtack pin */}
                <circle r={2.5} fill="#1a1a1a" />
                <circle r={1} fill="#ffffff" cy={-0.2} />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Location count */}
      <div className="px-6">
        <div className="max-w-4xl">
          <p className="text-sm text-gray-400 mt-4">
            {filteredLocations.length} {filteredLocations.length === 1 ? 'place' : 'places'}
            {selectedYear ? ` in ${selectedYear}` : ' visited'}
          </p>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredLocation && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm"
          style={{
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 40
          }}
        >
          <p className="text-sm text-gray-900 font-medium">
            {hoveredLocation.city.toLowerCase()}, {hoveredLocation.country.toLowerCase()}
          </p>
          <p className="text-xs text-gray-500">{hoveredLocation.year}</p>
        </div>
      )}

      {/* Detail modal */}
      {selectedLocation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setSelectedLocation(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {selectedLocation.photoPath && (
              <img
                src={selectedLocation.photoPath}
                alt={`${selectedLocation.city}, ${selectedLocation.country}`}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg text-gray-900">
                    {selectedLocation.city.toLowerCase()}, {selectedLocation.country.toLowerCase()}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{selectedLocation.year}</p>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              {selectedLocation.description && (
                <p className="text-gray-600 mt-4 text-sm">{selectedLocation.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
