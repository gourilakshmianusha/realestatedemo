export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  region: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse';
  image: string;
  description: string;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'The Sky Penthouse',
    price: 450000000,
    location: 'Worli, Mumbai',
    city: 'Mumbai',
    region: 'Maharashtra',
    beds: 4,
    baths: 5,
    sqft: 5200,
    type: 'Penthouse',
    image: 'https://picsum.photos/seed/mumbai_luxury_penthouse/1200/800',
    description: 'A palatial penthouse overlooking the Arabian Sea. Features direct elevator access, a private lap pool, and bespoke interiors by international designers.',
    agent: {
      name: 'Vikram Seth',
      phone: '+91 98200 12345',
      email: 'vikram@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_1/200/200',
    },
  },
  {
    id: '2',
    title: 'Heritage Lutyens Bungalow',
    price: 1200000000,
    location: 'Amrita Shergill Marg, Delhi',
    city: 'New Delhi',
    region: 'Delhi',
    beds: 6,
    baths: 7,
    sqft: 12000,
    type: 'House',
    image: 'https://picsum.photos/seed/delhi_heritage_mansion/1200/800',
    description: 'A rare opportunity to own a piece of history in the heart of the capital. This sprawling estate features manicured lawns and classic colonial architecture.',
    agent: {
      name: 'Ananya Sharma',
      phone: '+91 99100 54321',
      email: 'ananya@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_2/200/200',
    },
  },
  {
    id: '3',
    title: 'Modernist Tech Villa',
    price: 180000000,
    location: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    region: 'Karnataka',
    beds: 5,
    baths: 5,
    sqft: 7500,
    type: 'Villa',
    image: 'https://picsum.photos/seed/bangalore_modern_villa/1200/800',
    description: 'State-of-the-art home automation meeting sustainable architecture. This villa features a private home theater, zen garden, and double-height living spaces.',
    agent: {
      name: 'Rohan Murthy',
      phone: '+91 98450 98765',
      email: 'rohan@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_3/200/200',
    },
  },
  {
    id: '4',
    title: 'Ocean Edge Estate',
    price: 250000000,
    location: 'Assagao, Goa',
    city: 'Goa',
    region: 'Goa',
    beds: 5,
    baths: 6,
    sqft: 8000,
    type: 'Villa',
    image: 'https://picsum.photos/seed/goa_luxury_villa/1200/800',
    description: 'A contemporary sanctuary nestled in the hills of North Goa. Offering complete privacy, infinity pool, and panoramic views of the spice plantations.',
    agent: {
      name: 'Ananya Sharma',
      phone: '+91 99100 54321',
      email: 'ananya@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_2/200/200',
    },
  },
  {
    id: '5',
    title: 'The Imperial Suite',
    price: 85000000,
    location: 'Banjara Hills, Hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    beds: 3,
    baths: 4,
    sqft: 3800,
    type: 'Apartment',
    image: 'https://picsum.photos/seed/hyderabad_luxury_apartment/1200/800',
    description: 'Unparalleled luxury in one of Hyderabad\'s most prestigious postcodes. Features marble flooring, smart kitchen, and views of the Kasu Brahmananda Reddy Park.',
    agent: {
      name: 'Vikram Seth',
      phone: '+91 98200 12345',
      email: 'vikram@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_1/200/200',
    },
  },
  {
    id: '6',
    title: 'Rajputana Garden Estate',
    price: 320000000,
    location: 'Civil Lines, Jaipur',
    city: 'Jaipur',
    region: 'Rajasthan',
    beds: 6,
    baths: 8,
    sqft: 15000,
    type: 'House',
    image: 'https://picsum.photos/seed/jaipur_mansion/1200/800',
    description: 'Combining traditional Rajasthani aesthetics with modern luxury comforts. A true oasis featuring hand-crafted stone work and private courtyards.',
    agent: {
      name: 'Rohan Murthy',
      phone: '+91 98450 98765',
      email: 'rohan@luxeestate.in',
      image: 'https://picsum.photos/seed/indian_agent_3/200/200',
    },
  },
];

export const uniqueCities = Array.from(new Set(properties.map(p => p.city))).sort();
export const uniqueRegions = Array.from(new Set(properties.map(p => p.region))).sort();
