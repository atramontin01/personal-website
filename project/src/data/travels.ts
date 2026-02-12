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
    id: 'rio-2026',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    coordinates: [-43.1729, -22.9068],
    year: 2026
  },
  {
    id: 'sao-paulo-2026',
    city: 'São Paulo',
    country: 'Brazil',
    coordinates: [-46.6333, -23.5505],
    year: 2026
  },
  {
    id: 'ubatuba-2026',
    city: 'Ubatuba',
    country: 'Brazil',
    coordinates: [-45.0711, -23.4336],
    year: 2026
  },
  {
    id: 'trancoso-2026',
    city: 'Trancoso',
    country: 'Brazil',
    coordinates: [-39.0947, -16.5903],
    year: 2026
  },
  {
    id: 'maceio-2026',
    city: 'Maceió',
    country: 'Brazil',
    coordinates: [-35.7353, -9.6658],
    year: 2026
  },
  {
    id: 'channel-islands-2026',
    city: 'Channel Islands National Park',
    country: 'United States',
    coordinates: [-119.7227, 34.0069],
    year: 2026
  },
  {
    id: 'kitzbuhel-2025',
    city: 'Kitzbühel',
    country: 'Austria',
    coordinates: [12.3922, 47.4492],
    year: 2025
  },
  {
    id: 'prague-2025',
    city: 'Prague',
    country: 'Czech Republic',
    coordinates: [14.4378, 50.0755],
    year: 2025
  },
  {
    id: 'hong-kong-2025',
    city: 'Hong Kong',
    country: 'China',
    coordinates: [114.1694, 22.3193],
    year: 2025
  },
  {
    id: 'costa-rica-2025',
    city: 'Costa Rica',
    country: 'Costa Rica',
    coordinates: [-84.0907, 9.7489],
    year: 2025
  },
  {
    id: 'lake-shasta-2025',
    city: 'Lake Shasta',
    country: 'United States',
    coordinates: [-122.4167, 40.7181],
    year: 2025
  },
  {
    id: 'barcelona-2025',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [2.1734, 41.3851],
    year: 2025
  },
  {
    id: 'lisbon-2025',
    city: 'Lisbon',
    country: 'Portugal',
    coordinates: [-9.1393, 38.7223],
    year: 2025
  },
  {
    id: 'lassen-2025',
    city: 'Lassen National Park',
    country: 'United States',
    coordinates: [-121.5081, 40.4977],
    year: 2025
  },
  {
    id: 'new-york-2025',
    city: 'New York',
    country: 'United States',
    coordinates: [-74.0060, 40.7128],
    year: 2025
  },
  {
    id: 'cancun-2025',
    city: 'Cancún',
    country: 'Mexico',
    coordinates: [-86.8515, 21.1619],
    year: 2025
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
