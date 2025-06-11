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
      title: 'Upgraded 2 bedroom in Candler!',
      address: '40-B Queen Rd',
      city: 'Candler',
      zipCode: '28715',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1500,
      availableDate: '7/10/2025',
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
        'Beautiful upgraded home with modern amenities and spacious layout. Features include hardwood floors throughout, updated kitchen with stainless steel appliances, granite countertops, and a large master suite with walk-in closet. The property also includes a private backyard, central air conditioning, and washer/dryer hookups.',
    },
    {
      id: 2,
      title: 'Beautifully Updated Home! Fenced Yard!',
      address: '38 Tipton Dr',
      city: 'Candler',
      zipCode: '28715',
      bedrooms: 4,
      bathrooms: 3.5,
      rent: 3200,
      availableDate: '6/17/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Spacious family home with fenced yard, perfect for families with children and pets. This beautifully updated property features an open floor plan, modern kitchen with island, master suite with ensuite bathroom, and a large fenced backyard perfect for entertaining. Additional amenities include a two-car garage, central heating and cooling, and a covered patio.',
    },
    {
      id: 3,
      title: 'Modern Downtown Asheville Condo',
      address: '125 College St',
      city: 'Asheville',
      zipCode: '28801',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1800,
      availableDate: '8/1/2025',
      propertyType: 'Condo',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1568414032535-5d1ef3a59c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Luxury condo in the heart of downtown with city views and modern finishes.',
    },
    {
      id: 4,
      title: 'Charming Mountain View Apartment',
      address: '567 Sunset Dr',
      city: 'Black Mountain',
      zipCode: '28711',
      bedrooms: 2,
      bathrooms: 1.5,
      rent: 1400,
      availableDate: '7/15/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1520342868574-5fa3804e551e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1523217582852-7190d3156bab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1541346764-0396a8a4ca38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Cozy apartment with stunning mountain views and hiking trails nearby.',
    },
    {
      id: 5,
      title: 'Spacious Family Home with Garage',
      address: '892 Oak Ridge Rd',
      city: 'Waynesville',
      zipCode: '28786',
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 2100,
      availableDate: '6/30/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555905924-945140353c58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1551523851-628559895253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Large family home with attached garage and beautiful landscaping.',
    },
    {
      id: 6,
      title: 'Historic Downtown Townhouse',
      address: '234 Main St',
      city: 'Hendersonville',
      zipCode: '28792',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1900,
      availableDate: '8/15/2025',
      propertyType: 'Townhouse',
      image:
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Historic charm meets modern convenience in this downtown townhouse.',
    },
    {
      id: 7,
      title: 'Luxury Duplex with Private Entrance',
      address: '456 Pine Valley Dr',
      city: 'Fletcher',
      zipCode: '28732',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1650,
      availableDate: '7/1/2025',
      propertyType: 'Duplex',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Modern duplex with private entrance and high-end finishes throughout.',
    },
    {
      id: 8,
      title: 'Cozy Studio Near UNCA',
      address: '789 University Heights',
      city: 'Asheville',
      zipCode: '28804',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1200,
      availableDate: '8/20/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1568414032535-5d1ef3a59c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Perfect for students or young professionals, close to campus and amenities.',
    },
    {
      id: 9,
      title: 'Mountain Retreat with Hot Tub',
      address: '321 Ridge View Ln',
      city: 'Black Mountain',
      zipCode: '28711',
      bedrooms: 4,
      bathrooms: 3.0,
      rent: 2800,
      availableDate: '9/1/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Secluded mountain home with hot tub and panoramic views.',
    },
    {
      id: 10,
      title: 'Updated Ranch Style Home',
      address: '654 Meadowbrook Dr',
      city: 'Candler',
      zipCode: '28715',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1750,
      availableDate: '7/20/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Recently renovated ranch home with open floor plan and large yard.',
    },
    {
      id: 11,
      title: 'Luxury High-Rise Apartment',
      address: '100 Patton Ave',
      city: 'Asheville',
      zipCode: '28801',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 2400,
      availableDate: '8/5/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Premium apartment with concierge service and rooftop amenities.',
    },
    {
      id: 12,
      title: 'Pet-Friendly Townhouse',
      address: '987 Dogwood Ct',
      city: 'Waynesville',
      zipCode: '28786',
      bedrooms: 2,
      bathrooms: 1.5,
      rent: 1550,
      availableDate: '7/25/2025',
      propertyType: 'Townhouse',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Welcoming home for families with pets, includes fenced yard.',
    },
    {
      id: 13,
      title: 'Executive 5-Bedroom Estate',
      address: '1234 Country Club Dr',
      city: 'Hendersonville',
      zipCode: '28792',
      bedrooms: 5,
      bathrooms: 4.0,
      rent: 4500,
      availableDate: '9/15/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Luxurious estate home with golf course views and premium amenities.',
    },
    {
      id: 14,
      title: 'Affordable Starter Apartment',
      address: '555 Budget Ln',
      city: 'Fletcher',
      zipCode: '28732',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 950,
      availableDate: '8/10/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=cropc203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1568414032535-5d1ef3a59c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Great value apartment perfect for first-time renters.',
    },
    {
      id: 15,
      title: 'Renovated Victorian Home',
      address: '876 Heritage St',
      city: 'Asheville',
      zipCode: '28803',
      bedrooms: 4,
      bathrooms: 2.5,
      rent: 3000,
      availableDate: '9/30/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Historic Victorian home with modern updates and original character.',
    },
    {
      id: 16,
      title: 'Lakefront Condo with Dock',
      address: '432 Lake Shore Dr',
      city: 'Black Mountain',
      zipCode: '28711',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 2600,
      availableDate: '8/25/2025',
      propertyType: 'Condo',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Stunning lakefront property with private dock and water access.',
    },
    {
      id: 17,
      title: 'Modern Duplex Unit',
      address: '765 Twin Oaks Dr',
      city: 'Candler',
      zipCode: '28715',
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 1850,
      availableDate: '7/5/2025',
      propertyType: 'Duplex',
      image:
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Contemporary duplex with energy-efficient features and modern design.',
    },
    {
      id: 18,
      title: 'Garden Level Apartment',
      address: '321 Garden View Rd',
      city: 'Waynesville',
      zipCode: '28786',
      bedrooms: 2,
      bathrooms: 1.0,
      rent: 1300,
      availableDate: '8/30/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1568414032535-5d1ef3a59c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Quiet garden-level apartment with patio and garden access.',
    },
    {
      id: 19,
      title: 'Luxury Penthouse Suite',
      address: '999 Skyline Blvd',
      city: 'Asheville',
      zipCode: '28801',
      bedrooms: 3,
      bathrooms: 3.0,
      rent: 3800,
      availableDate: '10/1/2025',
      propertyType: 'Condo',
      image:
        'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Top-floor penthouse with panoramic city and mountain views.',
    },
    {
      id: 20,
      title: 'Family Home with Pool',
      address: '147 Splash Dr',
      city: 'Hendersonville',
      zipCode: '28792',
      bedrooms: 4,
      bathrooms: 3.0,
      rent: 2900,
      availableDate: '9/10/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Beautiful family home with in-ground pool and entertainment area.',
    },
    {
      id: 21,
      title: 'Cozy Cottage Rental',
      address: '258 Cottage Grove',
      city: 'Fletcher',
      zipCode: '28732',
      bedrooms: 2,
      bathrooms: 1.5,
      rent: 1450,
      availableDate: '7/12/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Charming cottage with rustic charm and modern conveniences.',
    },
    {
      id: 22,
      title: 'Urban Loft Apartment',
      address: '369 Industrial Way',
      city: 'Asheville',
      zipCode: '28801',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1600,
      availableDate: '8/18/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Trendy loft with exposed brick and high ceilings in arts district.',
    },
    {
      id: 23,
      title: 'Mountain View Townhouse',
      address: '741 Vista Ridge',
      city: 'Black Mountain',
      zipCode: '28711',
      bedrooms: 3,
      bathrooms: 2.5,
      rent: 2200,
      availableDate: '9/5/2025',
      propertyType: 'Townhouse',
      image:
        'https://images.unsplash.com/photo-1600047509807-f8261a3f7538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600047509807-f8261a3f7538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Three-story townhouse with breathtaking mountain vistas.',
    },
    {
      id: 24,
      title: 'Affordable Family Duplex',
      address: '852 Twin Home Ln',
      city: 'Candler',
      zipCode: '28715',
      bedrooms: 3,
      bathrooms: 2.0,
      rent: 1600,
      availableDate: '7/28/2025',
      propertyType: 'Duplex',
      image:
        'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Spacious duplex perfect for growing families on a budget.',
    },
    {
      id: 25,
      title: 'Senior-Friendly Ranch',
      address: '963 Easy Living Dr',
      city: 'Waynesville',
      zipCode: '28786',
      bedrooms: 2,
      bathrooms: 2.0,
      rent: 1700,
      availableDate: '8/8/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Single-level home with accessibility features and low maintenance.',
    },
    {
      id: 26,
      title: 'Historic District Apartment',
      address: '159 Heritage Walk',
      city: 'Hendersonville',
      zipCode: '28792',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1350,
      availableDate: '9/20/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Charming apartment in historic district with period details.',
    },
    {
      id: 27,
      title: 'Modern Smart Home',
      address: '753 Tech Valley Rd',
      city: 'Fletcher',
      zipCode: '28732',
      bedrooms: 4,
      bathrooms: 3.5,
      rent: 3400,
      availableDate: '10/15/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Cutting-edge smart home with automated systems and energy efficiency.',
    },
    {
      id: 28,
      title: 'Artist Studio Loft',
      address: '486 Creative Commons',
      city: 'Asheville',
      zipCode: '28801',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1400,
      availableDate: '8/22/2025',
      propertyType: 'Apartment',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7e64c4a2d58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Inspiring loft space perfect for artists with natural light and high ceilings.',
    },
    {
      id: 29,
      title: 'Luxury Golf Course Home',
      address: '1357 Fairway Dr',
      city: 'Hendersonville',
      zipCode: '28792',
      bedrooms: 5,
      bathrooms: 4.5,
      rent: 5200,
      availableDate: '11/1/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Prestigious home on golf course with club membership included.',
    },
    {
      id: 30,
      title: 'Eco-Friendly Tiny Home',
      address: '951 Sustainable Way',
      city: 'Black Mountain',
      zipCode: '28711',
      bedrooms: 1,
      bathrooms: 1.0,
      rent: 1100,
      availableDate: '9/25/2025',
      propertyType: 'House',
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ],
      description:
        'Innovative tiny home with solar power and sustainable features.',
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
    this.filteredProperties.set(this.properties.filter((property) => {
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
    }));

    this.sortProperties();
  }

  sortProperties() {
    switch (this.sortBy) {
      case 'Price: Low to High':
        this.filteredProperties.set(this.filteredProperties().sort((a, b) => a.rent - b.rent));
        break;
      case 'Price: High to Low':
        this.filteredProperties.set(this.filteredProperties().sort((a, b) => b.rent - a.rent));
        break;
      case 'Bedrooms':
        this.filteredProperties.set(this.filteredProperties().sort((a, b) => b.bedrooms - a.bedrooms));
        break;
      case 'Bathrooms':
        this.filteredProperties.set(this.filteredProperties().sort((a, b) => b.bathrooms - a.bathrooms));
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
