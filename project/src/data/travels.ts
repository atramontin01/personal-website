export interface TravelLocation {
  id: string;
  city: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  year: number;
  photoPath?: string;
  description?: string;
}

export const travelLocations: TravelLocation[] = [
  {
    id: 'rome-2023',
    city: 'Rome',
    country: 'Italy',
    coordinates: [12.4964, 41.9028],
    year: 2023,
    description: 'exploring the eternal city'
  },
  {
    id: 'paris-2023',
    city: 'Paris',
    country: 'France',
    coordinates: [2.3522, 48.8566],
    year: 2023,
    description: 'city of light'
  },
  {
    id: 'tokyo-2024',
    city: 'Tokyo',
    country: 'Japan',
    coordinates: [139.6917, 35.6895],
    year: 2024,
    description: 'neon lights and quiet temples'
  },
  {
    id: 'barcelona-2024',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [2.1734, 41.3851],
    year: 2024,
    description: 'gaudí and the mediterranean'
  },
  {
    id: 'london-2022',
    city: 'London',
    country: 'United Kingdom',
    coordinates: [-0.1276, 51.5074],
    year: 2022,
    description: 'tea, rain, and history'
  },
  {
    id: 'lisbon-2024',
    city: 'Lisbon',
    country: 'Portugal',
    coordinates: [-9.1393, 38.7223],
    year: 2024,
    description: 'pastel de nata and tram 28'
  },
  {
    id: 'mexico-city-2023',
    city: 'Mexico City',
    country: 'Mexico',
    coordinates: [-99.1332, 19.4326],
    year: 2023,
    description: 'tacos and murals'
  },
  {
    id: 'sf-2024',
    city: 'San Francisco',
    country: 'United States',
    coordinates: [-122.4194, 37.7749],
    year: 2024,
    description: 'fog city'
  }
];

export function getTravelYears(): number[] {
  const years = [...new Set(travelLocations.map(loc => loc.year))];
  return years.sort((a, b) => b - a);
}
