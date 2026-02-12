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
    id: 'amsterdam-2023',
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [4.9041, 52.3676],
    year: 2023
  },
  {
    id: 'brussels-2023',
    city: 'Brussels',
    country: 'Belgium',
    coordinates: [4.3517, 50.8503],
    year: 2023
  },
  {
    id: 'paris-2023',
    city: 'Paris',
    country: 'France',
    coordinates: [2.3522, 48.8566],
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
    id: 'mexico-city-2020',
    city: 'Mexico City',
    country: 'Mexico',
    coordinates: [-99.1332, 19.4326],
    year: 2020
  },
  {
    id: 'whistler-2020',
    city: 'Whistler',
    country: 'Canada',
    coordinates: [-122.9574, 50.1163],
    year: 2020
  },
  {
    id: 'kauai-2020',
    city: 'Kauai',
    country: 'United States',
    coordinates: [-159.5261, 22.0964],
    year: 2020
  },
  {
    id: 'morocco-2019',
    city: 'Morocco',
    country: 'Morocco',
    coordinates: [-7.0926, 31.7917],
    year: 2019
  },
  {
    id: 'barcelona-2019',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [2.1734, 41.3851],
    year: 2019
  },
  {
    id: 'new-orleans-2018',
    city: 'New Orleans',
    country: 'United States',
    coordinates: [-90.0715, 29.9511],
    year: 2018
  },
  {
    id: 'vietnam-2018',
    city: 'Vietnam',
    country: 'Vietnam',
    coordinates: [108.2772, 14.0583],
    year: 2018
  },
  {
    id: 'cambodia-2018',
    city: 'Cambodia',
    country: 'Cambodia',
    coordinates: [104.9910, 12.5657],
    year: 2018
  },
  {
    id: 'taiwan-2018',
    city: 'Taiwan',
    country: 'Taiwan',
    coordinates: [120.9605, 23.6978],
    year: 2018
  },
  {
    id: 'myanmar-2018',
    city: 'Myanmar',
    country: 'Myanmar',
    coordinates: [95.9560, 21.9162],
    year: 2018
  },
  {
    id: 'philippines-2018',
    city: 'Philippines',
    country: 'Philippines',
    coordinates: [121.7740, 12.8797],
    year: 2018
  },
  {
    id: 'hong-kong-2018',
    city: 'Hong Kong',
    country: 'China',
    coordinates: [114.1694, 22.3193],
    year: 2018
  }
];

export function getTravelYears(): number[] {
  const years = [...new Set(travelLocations.map(loc => loc.year))];
  return years.sort((a, b) => b - a);
}
