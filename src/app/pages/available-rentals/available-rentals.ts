import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertyDetail } from './property-detail/property-detail';

interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  rent: number;
  availableDate: string;
  propertyType: string;
  image: string;
  images: string[];
  description: string;
}

@Component({
  selector: 'app-available-rentals',
  standalone: true,
  imports: [RouterModule, FormsModule, PropertyDetail, DecimalPipe],
  templateUrl: './available-rentals.html',
  styleUrls: ['./available-rentals.css'],
})
export class AvailableRentals {
  document = inject(DOCUMENT);
  viewMode: 'list' | 'map' = 'list';
  searchTerm = '';
  selectedCity = '';
  selectedPropertyType = '';
  selectedBedrooms = '';
  selectedBaths = '';
  sortBy = 'Most Recent';

  cities = [
    'All Cities',
    'Candler',
    'Asheville',
    'Black Mountain',
    'Waynesville',
    'Hendersonville',
    'Fletcher',
  ];
  propertyTypes = [
    'All Types',
    'House',
    'Apartment',
    'Condo',
    'Townhouse',
    'Duplex',
  ];
  bedroomOptions = ['Any', '1', '2', '3', '4', '5+'];
  bathOptions = ['Any', '1', '1.5', '2', '2.5', '3', '3.5', '4+'];
  sortOptions = [
    'Most Recent',
    'Price: Low to High',
    'Price: High to Low',
    'Bedrooms',
    'Bathrooms',
  ];

  properties: Property[] = [
    {
      id: 1,
      title: 'Spacious 3BR House Near Downtown Goldsboro',
      address: '1205 E Walnut Street',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1350,
      availableDate: '7/15/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Beautiful 3-bedroom house with updated kitchen, hardwood floors, and large backyard. Close to downtown Goldsboro with easy access to shopping and dining. Features central air, washer/dryer hookups, and off-street parking.',
    },
    {
      id: 2,
      title: 'Modern 2BD Apartment with Amenities',
      address: '2840 Wayne Memorial Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1150,
      availableDate: '8/1/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Contemporary 2-bedroom apartment with granite countertops, stainless steel appliances, and in-unit laundry. Complex features pool, fitness center, and covered parking. Pet-friendly with fenced dog park.',
    },
    {
      id: 3,
      title: 'Charming 1BR Cottage Style Home',
      address: '1156 N William Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 850,
      availableDate: '7/20/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Cozy 1-bedroom cottage with original hardwood floors and vintage charm. Updated bathroom and kitchen, private patio, and garden area. Perfect for singles or couples seeking quiet neighborhood living.',
    },
    {
      id: 4,
      title: 'Luxury 4BR Executive Home',
      address: '305 Country Club Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 4,
      bathrooms: 3.5,
      rent: 2200,
      availableDate: '8/15/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1515263487990-61b07816b924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Stunning executive home with gourmet kitchen, master suite with walk-in closet, bonus room, and 2-car garage. Located in prestigious neighborhood near country club. Features include marble countertops, custom cabinetry, and professionally landscaped yard.',
    },
    {
      id: 5,
      title: 'Affordable 2BR Duplex',
      address: '987 S George Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 2,
      bathrooms: 1.0,
      rent: 900,
      availableDate: '7/25/2025',
      propertyType: 'Duplex',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Clean and well-maintained duplex with spacious bedrooms, eat-in kitchen, and private entrance. Includes appliances, central heat/air, and small backyard. Great for first-time renters or those on a budget.',
    },
    {
      id: 6,
      title: 'Updated 3BR Ranch Style',
      address: '1432 Piedmont Avenue',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1275,
      availableDate: '8/10/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Recently renovated ranch-style home with open floor plan, new flooring throughout, and updated bathrooms. Large living area, dining room, and private backyard with deck. Move-in ready condition.',
    },
    {
      id: 7,
      title: 'Studio Apartment Downtown',
      address: '125 N Center Street',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 0,
      bathrooms: 1.0,
      rent: 650,
      availableDate: '7/30/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Efficient studio apartment in the heart of downtown Goldsboro. Features high ceilings, modern fixtures, and kitchenette. Walking distance to restaurants, shops, and entertainment venues. Perfect for professionals or students.',
    },
    {
      id: 8,
      title: 'Family Home with Large Yard',
      address: '2756 Salem Church Road',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 4,
      bathrooms: 2.5,
      rent: 1650,
      availableDate: '8/5/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1597047084897-51e81819e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Spacious family home with 4 bedrooms, formal dining room, and large living area. Huge fenced backyard perfect for children and pets. Updated kitchen with breakfast bar, master suite with private bath, and attached carport.',
    },
    {
      id: 9,
      title: 'Convenient 1BR Near Base',
      address: '3421 US Highway 70 East',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 750,
      availableDate: '8/20/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Military-friendly 1-bedroom apartment with easy access to Seymour Johnson Air Force Base. Includes all appliances, covered parking, and on-site laundry facilities. Flexible lease terms available for military personnel.',
    },
    {
      id: 10,
      title: 'Townhouse with Modern Updates',
      address: '1789 Cardinal Woods Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 1425,
      availableDate: '7/12/2025',
      propertyType: 'Townhouse',
      image:
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Modern townhouse with vaulted ceilings, fireplace, and attached garage. End unit with extra privacy, patio, and storage space. Features include hardwood floors, updated kitchen, and master bedroom with ensuite bathroom.',
    },
    {
      id: 11,
      title: 'Cozy 2BR Mobile Home',
      address: '4567 Old Mount Olive Highway',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 1.0,
      rent: 675,
      availableDate: '8/8/2025',
      propertyType: 'Mobile Home',
      image:
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Well-maintained mobile home in quiet park setting. Includes appliances, central air, and covered parking. Large lot with storage shed and garden space. Pet-friendly community with playground and laundry facilities.',
    },
    {
      id: 12,
      title: 'Historic District Apartment',
      address: '234 East Chestnut Street',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 1.5,
      rent: 1050,
      availableDate: '7/18/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Charming apartment in historic downtown building with original architectural features. High ceilings, large windows, and hardwood floors. Walking distance to parks, museums, and local businesses. Off-street parking included.',
    },
    {
      id: 13,
      title: 'New Construction 3BR Home',
      address: '892 Springbrook Lane',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1550,
      availableDate: '8/25/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Brand new construction home with energy-efficient features and modern amenities. Open concept living, granite countertops, stainless appliances, and luxury vinyl plank flooring. Two-car garage and covered front porch.',
    },
    {
      id: 14,
      title: 'Affordable 1BR Efficiency',
      address: '567 S Herman Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 550,
      availableDate: '7/28/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Budget-friendly efficiency apartment perfect for students or those needing temporary housing. Basic amenities included, shared laundry facilities, and convenient location near public transportation and shopping.',
    },
    {
      id: 15,
      title: 'Spacious 4BR Colonial',
      address: '1234 Country Lane Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 4,
      bathrooms: 3.0,
      rent: 1875,
      availableDate: '8/12/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1515263487990-61b07816b924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Elegant colonial home with formal living and dining rooms, family room with fireplace, and eat-in kitchen. Master suite with walk-in closet, finished basement, and 2-car attached garage. Beautifully landscaped corner lot.',
    },
    {
      id: 16,
      title: 'Renovated 2BR Bungalow',
      address: '876 Pine Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 2,
      bathrooms: 1.0,
      rent: 975,
      availableDate: '7/22/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Completely renovated bungalow with original character and modern conveniences. New kitchen and bathroom, refinished hardwood floors, and updated electrical/plumbing. Front porch and private backyard with mature trees.',
    },
    {
      id: 17,
      title: 'Luxury 2BR Loft Downtown',
      address: '456 West Walnut Street',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1650,
      availableDate: '8/18/2025',
      propertyType: 'Loft',
      image:
        'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Stunning urban loft with exposed brick walls, high ceilings, and industrial fixtures. Modern kitchen with island, spa-like bathrooms, and floor-to-ceiling windows. Includes parking space and building amenities.',
    },
    {
      id: 18,
      title: 'Pet-Friendly 3BR Ranch',
      address: '2145 Berkeley Boulevard',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1325,
      availableDate: '7/16/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1597047084897-51e81819e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Pet-friendly ranch home with fenced backyard and doggy door. Open living area, eat-in kitchen, and split bedroom plan. Laminate flooring throughout, ceiling fans, and storage building. Great for families with pets.',
    },
    {
      id: 19,
      title: 'Senior Living 1BR',
      address: '789 Retirement Village Way',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 950,
      availableDate: '8/6/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Age-restricted community apartment with handicap accessibility features. Emergency call system, community activities, transportation services, and maintenance included. Quiet setting with walking trails and garden areas.',
    },
    {
      id: 20,
      title: 'Student Housing 4BR',
      address: '1567 University Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 4,
      bathrooms: 2.0,
      rent: 1400,
      availableDate: '7/31/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Perfect for college students or young professionals sharing expenses. Four bedrooms, common areas, high-speed internet ready, and close to Wayne Community College. Individual leases available with roommate matching services.',
    },
    {
      id: 21,
      title: 'Waterfront 2BR Condo',
      address: '345 Lake View Terrace',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1475,
      availableDate: '8/14/2025',
      propertyType: 'Condo',
      image:
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Scenic waterfront condo with private balcony overlooking the lake. Premium finishes, fireplace, and access to community dock and recreational facilities. Includes boat slip and swimming pool privileges.',
    },
    {
      id: 22,
      title: 'Compact 1BR Near Hospital',
      address: '678 Medical Center Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 825,
      availableDate: '7/26/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Convenient apartment for medical professionals, walking distance to Wayne UNC Health Care. Clean, efficient layout with updated fixtures, on-site parking, and 24-hour security. Perfect for hospital staff and residents.',
    },
    {
      id: 23,
      title: 'Luxury 5BR Executive Estate',
      address: '1001 Mansion Hill Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 5,
      bathrooms: 4.5,
      rent: 2750,
      availableDate: '8/30/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1515263487990-61b07816b924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Magnificent executive estate with 5 bedrooms, gourmet kitchen, library, and home theater. Swimming pool, 3-car garage, and professionally landscaped grounds. Premium location in gated community with 24/7 security.',
    },
    {
      id: 24,
      title: 'Affordable 3BR Duplex',
      address: '432 Elm Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 3,
      bathrooms: 1.5,
      rent: 1075,
      availableDate: '8/3/2025',
      propertyType: 'Duplex',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Well-maintained duplex with three bedrooms and private entrance. Good-sized living area, dining room, and kitchen with appliances. Shared laundry facility, parking space, and small yard area for outdoor activities.',
    },
    {
      id: 25,
      title: 'Modern 2BR Near Shopping',
      address: '876 Retail Plaza Boulevard',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1225,
      availableDate: '7/14/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Contemporary apartment complex near Berkeley Mall and major retailers. Two bedrooms with walk-in closets, modern kitchen with breakfast bar, and in-unit washer/dryer. Complex amenities include gym and pool.',
    },
    {
      id: 26,
      title: 'Country Style 3BR Home',
      address: '5643 Rural Route 15',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1175,
      availableDate: '8/22/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1597047084897-51e81819e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Peaceful country home on large lot with mature trees and garden space. Wraparound porch, wood-burning fireplace, and eat-in kitchen. Detached garage/workshop, well water, and septic system. Perfect for those seeking rural tranquility.',
    },
    {
      id: 27,
      title: 'Updated 1BR Garden Apartment',
      address: '234 Garden Court',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 775,
      availableDate: '7/19/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Ground-floor garden apartment with private patio and direct outdoor access. Recently updated with new carpet, paint, and fixtures. Quiet complex with landscaped grounds, pool, and community laundry facilities.',
    },
    {
      id: 28,
      title: 'Spacious 4BR Split Level',
      address: '987 Hillcrest Drive',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 4,
      bathrooms: 2.5,
      rent: 1625,
      availableDate: '8/7/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Multi-level home with four bedrooms, family room with fireplace, and finished basement recreation area. Large kitchen with dining space, master suite, and two-car carport. Mature landscaping and storage shed included.',
    },
    {
      id: 29,
      title: 'Cozy 2BR Cottage',
      address: '543 Magnolia Street',
      city: 'Goldsboro',
      zipCode: '27530',
      bedrooms: 2,
      bathrooms: 1.0,
      rent: 925,
      availableDate: '8/11/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Charming cottage with original hardwood floors and vintage character. Two comfortable bedrooms, updated kitchen, and cozy living area with built-in shelving. Private backyard with garden space and covered parking.',
    },
    {
      id: 30,
      title: 'Executive 3BR Townhome',
      address: '321 Executive Square',
      city: 'Goldsboro',
      zipCode: '27534',
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 1525,
      availableDate: '8/28/2025',
      propertyType: 'Townhouse',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Upscale townhome in executive complex with attached garage and private entrance. Three levels of living space, master suite with vaulted ceiling, and gourmet kitchen with island. Community amenities include tennis court and clubhouse.',
    },
  ];
  filteredProperties = signal<Property[]>([]);

  expandedDescriptions: Set<number> = new Set();
  selectedProperty: Property | null = null;
  showPropertyDetail = signal<boolean>(false);

  ngOnInit() {
    this.filteredProperties.set([...this.properties]);
  }

  clearSearch() {
    this.searchTerm = '';
    this.applyFilters();
  }

  clearFilters() {
    this.selectedCity = '';
    this.selectedPropertyType = '';
    this.selectedBedrooms = '';
    this.selectedBaths = '';
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProperties.set(
      this.properties.filter((property) => {
        const matchesSearch =
          !this.searchTerm ||
          property.address
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          property.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          property.zipCode.includes(this.searchTerm);

        const matchesCity =
          !this.selectedCity ||
          this.selectedCity === 'All Cities' ||
          property.city === this.selectedCity;
        const matchesPropertyType =
          !this.selectedPropertyType ||
          this.selectedPropertyType === 'All Types' ||
          property.propertyType === this.selectedPropertyType;
        const matchesBedrooms =
          !this.selectedBedrooms ||
          this.selectedBedrooms === 'Any' ||
          (this.selectedBedrooms === '5+'
            ? property.bedrooms >= 5
            : property.bedrooms.toString() === this.selectedBedrooms);
        const matchesBaths =
          !this.selectedBaths ||
          this.selectedBaths === 'Any' ||
          (this.selectedBaths === '4+'
            ? property.bathrooms >= 4
            : property.bathrooms.toString() === this.selectedBaths);

        return (
          matchesSearch &&
          matchesCity &&
          matchesPropertyType &&
          matchesBedrooms &&
          matchesBaths
        );
      })
    );

    this.sortProperties();
  }

  sortProperties() {
    switch (this.sortBy) {
      case 'Price: Low to High':
        this.filteredProperties.set(
          this.filteredProperties().sort((a, b) => a.rent - b.rent)
        );
        break;
      case 'Price: High to Low':
        this.filteredProperties.set(
          this.filteredProperties().sort((a, b) => b.rent - a.rent)
        );
        break;
      case 'Bedrooms':
        this.filteredProperties.set(
          this.filteredProperties().sort((a, b) => b.bedrooms - a.bedrooms)
        );
        break;
      case 'Bathrooms':
        this.filteredProperties.set(
          this.filteredProperties().sort((a, b) => b.bathrooms - a.bathrooms)
        );
        break;
      default:
        // Most Recent - keep original order
        break;
    }
  }

  onFilterChange() {
    this.applyFilters();
  }

  scheduleViewing(property: Property) {
    // Handle scheduling logic
    console.log('Schedule viewing for:', property.title);
  }

  submitApplication(property: Property) {
    // Handle application logic
    console.log('Submit application for:', property.title);
  }

  toggleDescription(propertyId: number) {
    if (this.expandedDescriptions.has(propertyId)) {
      this.expandedDescriptions.delete(propertyId);
    } else {
      this.expandedDescriptions.add(propertyId);
    }
  }

  isDescriptionExpanded(propertyId: number): boolean {
    return this.expandedDescriptions.has(propertyId);
  }

  openPropertyDetail(property: Property) {
    this.selectedProperty = property;
    this.showPropertyDetail.set(true);
    // Prevent body scroll when modal is open
    this.document.body.style.overflow = 'hidden';
  }

  closePropertyDetail() {
    this.selectedProperty = null;
    this.showPropertyDetail.set(false);
    // Restore body scroll
    this.document.body.style.overflow = 'auto';
  }
}
