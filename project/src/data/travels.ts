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
    id: 'ixtapa-2025',
    city: 'Ixtapa',
    country: 'Mexico',
    coordinates: [-101.5534, 17.6570],
    year: 2025
  },
  {
    id: 'sayulita-2024',
    city: 'Sayulita',
    country: 'Mexico',
    coordinates: [-105.4414, 20.8691],
    year: 2024
  },
  {
    id: 'naples-fl-2024',
    city: 'Naples',
    country: 'United States',
    coordinates: [-81.7948, 26.1420],
    year: 2024
  },
  {
    id: 'las-vegas-2024',
    city: 'Las Vegas',
    country: 'United States',
    coordinates: [-115.1398, 36.1699],
    year: 2024
  },
  {
    id: 'guatemala-2024',
    city: 'Guatemala',
    country: 'Guatemala',
    coordinates: [-90.5069, 14.6349],
    year: 2024
  },
  {
    id: 'catalina-island-2024',
    city: 'Catalina Island',
    country: 'United States',
    coordinates: [-118.4160, 33.3872],
    year: 2024
  },
  {
    id: 'amelia-island-2024',
    city: 'Amelia Island',
    country: 'United States',
    coordinates: [-81.4626, 30.6697],
    year: 2024
  },
  {
    id: 'la-paz-2024',
    city: 'La Paz',
    country: 'Mexico',
    coordinates: [-110.3128, 24.1426],
    year: 2024
  },
  {
    id: 'los-roques-2023',
    city: 'Los Roques',
    country: 'Venezuela',
    coordinates: [-66.6706, 11.8497],
    year: 2023
  },
  {
    id: 'medellin-2023',
    city: 'Medellín',
    country: 'Colombia',
    coordinates: [-75.5636, 6.2442],
    year: 2023
  },
  {
    id: 'santa-marta-2023',
    city: 'Santa Marta',
    country: 'Colombia',
    coordinates: [-74.1990, 11.2408],
    year: 2023
  },
  {
    id: 'cartagena-2023',
    city: 'Cartagena',
    country: 'Colombia',
    coordinates: [-75.5144, 10.3910],
    year: 2023
  },
  {
    id: 'salento-2023',
    city: 'Salento',
    country: 'Colombia',
    coordinates: [-75.5674, 4.6378],
    year: 2023
  },
  {
    id: 'chamonix-2023',
    city: 'Chamonix',
    country: 'France',
    coordinates: [6.8694, 45.9237],
    year: 2023
  },
  {
    id: 'slc-2023',
    city: 'Salt Lake City',
    country: 'United States',
    coordinates: [-111.8910, 40.7608],
    year: 2023
  },
  {
    id: 'big-sky-2023',
    city: 'Big Sky',
    country: 'United States',
    coordinates: [-111.4013, 45.2833],
    year: 2023
  },
  {
    id: 'yellowstone-2023',
    city: 'Yellowstone National Park',
    country: 'United States',
    coordinates: [-110.5885, 44.4280],
    year: 2023
  },
  {
    id: 'montreal-2022',
    city: 'Montreal',
    country: 'Canada',
    coordinates: [-73.5673, 45.5017],
    year: 2022
  },
  {
    id: 'canaima-2022',
    city: 'Canaima',
    country: 'Venezuela',
    coordinates: [-62.8543, 6.2442],
    year: 2022
  },
  {
    id: 'margarita-2022',
    city: 'Margarita Island',
    country: 'Venezuela',
    coordinates: [-63.8617, 11.0041],
    year: 2022
  },
  {
    id: 'panama-city-2022',
    city: 'Panama City',
    country: 'Panama',
    coordinates: [-79.5199, 8.9824],
    year: 2022
  },
  {
    id: 'oahu-2021',
    city: 'Oahu',
    country: 'United States',
    coordinates: [-158.0000, 21.4389],
    year: 2021
  },
  {
    id: 'chicago-2021',
    city: 'Chicago',
    country: 'United States',
    coordinates: [-87.6298, 41.8781],
    year: 2021
  },
  {
    id: 'new-york-2021',
    city: 'New York',
    country: 'United States',
    coordinates: [-74.0060, 40.7128],
    year: 2021
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
