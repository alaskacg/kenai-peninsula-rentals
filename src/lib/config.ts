import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Kenai Peninsula Rentals',
  title: 'Kenai Peninsula Rentals - Quality Rental Properties',
  description: 'Long-term and short-term rental properties across the Kenai Peninsula. Find your perfect rental home today',
  url: 'https://kenaipeninsularentals.com',
  ogImage: '/og-image.jpg',
  phone: '(907) 555-0103',
  email: 'rentals@kenaipeninsularentals.com',
  address: 'Kenai Peninsula, Alaska',
  businessType: 'RealEstateAgent',
  primaryColor: '#006838',
  relatedSites: [
    { name: 'Kenai Borough', url: 'https://kenaiborough.com', description: 'Official Kenai Peninsula Borough portal' },
    { name: 'Kenai Borough Realty', url: 'https://kenaiboroughrealty.com', description: 'Full-service real estate for homes, land, and commercial properties' },
    { name: 'Kenai Land Sales', url: 'https://kenailandsales.com', description: 'Acreage, lots, and development opportunities' },
    { name: 'Kenai Home Sales', url: 'https://kenaihomesales.com', description: 'Residential home sales experts' },
    { name: 'Kenai Auto Sales', url: 'https://kenaiautosales.com', description: 'Quality vehicles for Alaska living' }
  ],
  listingTypes: ['rental', 'home']
};
