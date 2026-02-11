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
    id: 'sf-2026',
    city: 'San Francisco',
    country: 'United States',
    coordinates: [-122.4194, 37.7749],
    year: 2026,
    description: 'fog city'
  },
  {
    id: 'tokyo-2025',
    city: 'Tokyo',
    country: 'Japan',
    coordinates: [139.6917, 35.6895],
    year: 2025,
    description: 'neon lights and quiet temples'
  },
  {
    id: 'barcelona-2025',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [2.1734, 41.3851],
    year: 2025,
    description: 'gaudí and the mediterranean'
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
    id: 'rome-2024',
    city: 'Rome',
    country: 'Italy',
    coordinates: [12.4964, 41.9028],
    year: 2024,
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
    id: 'mexico-city-2023',
    city: 'Mexico City',
    country: 'Mexico',
    coordinates: [-99.1332, 19.4326],
    year: 2023,
    description: 'tacos and murals'
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
    id: 'amsterdam-2022',
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [4.9041, 52.3676],
    year: 2022,
    description: 'canals and bikes'
  },
  {
    id: 'berlin-2021',
    city: 'Berlin',
    country: 'Germany',
    coordinates: [13.4050, 52.5200],
    year: 2021,
    description: 'history and techno'
  },
  {
    id: 'dubai-2021',
    city: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: [55.2708, 25.2048],
    year: 2021,
    description: 'desert and skyline'
  },
  {
    id: 'buenos-aires-2020',
    city: 'Buenos Aires',
    country: 'Argentina',
    coordinates: [-58.3816, -34.6037],
    year: 2020,
    description: 'tango and steak'
  },
  {
    id: 'bogota-2020',
    city: 'Bogotá',
    country: 'Colombia',
    coordinates: [-74.0721, 4.7110],
    year: 2020,
    description: 'coffee and mountains'
  },
  {
    id: 'sydney-2019',
    city: 'Sydney',
    country: 'Australia',
    coordinates: [151.2093, -33.8688],
    year: 2019,
    description: 'harbour and beaches'
  },
  {
    id: 'bangkok-2019',
    city: 'Bangkok',
    country: 'Thailand',
    coordinates: [100.5018, 13.7563],
    year: 2019,
    description: 'temples and street food'
  },
  {
    id: 'marrakech-2018',
    city: 'Marrakech',
    country: 'Morocco',
    coordinates: [-7.9811, 31.6295],
    year: 2018,
    description: 'souks and riads'
  },
  {
    id: 'istanbul-2018',
    city: 'Istanbul',
    country: 'Turkey',
    coordinates: [28.9784, 41.0082],
    year: 2018,
    description: 'where east meets west'
  }
];

export function getTravelYears(): number[] {
  const years = [...new Set(travelLocations.map(loc => loc.year))];
  return years.sort((a, b) => b - a);
}
