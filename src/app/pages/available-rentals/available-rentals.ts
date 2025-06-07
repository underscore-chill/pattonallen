import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  description: string;
}

@Component({
  selector: 'app-available-rentals',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './available-rentals.html',
  styleUrls: ['./available-rentals.css'],
})
export class AvailableRentals {
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
      image: 'assets/images/property-1.jpg',
      description:
        'Beautiful upgraded home with modern amenities and spacious layout.',
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
      image: 'assets/images/property-2.jpg',
      description:
        'Spacious family home with fenced yard, perfect for families with children and pets.',
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
      image: 'assets/images/property-3.jpg',
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
      image: 'assets/images/property-4.jpg',
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
      image: 'assets/images/property-5.jpg',
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
      image: 'assets/images/property-6.jpg',
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
      image: 'assets/images/property-7.jpg',
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
      image: 'assets/images/property-8.jpg',
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
      image: 'assets/images/property-9.jpg',
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
      image: 'assets/images/property-10.jpg',
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
      image: 'assets/images/property-11.jpg',
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
      image: 'assets/images/property-12.jpg',
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
      image: 'assets/images/property-13.jpg',
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
      image: 'assets/images/property-14.jpg',
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
      image: 'assets/images/property-15.jpg',
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
      image: 'assets/images/property-16.jpg',
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
      image: 'assets/images/property-17.jpg',
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
      image: 'assets/images/property-18.jpg',
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
      image: 'assets/images/property-19.jpg',
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
      image: 'assets/images/property-20.jpg',
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
      image: 'assets/images/property-21.jpg',
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
      image: 'assets/images/property-22.jpg',
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
      image: 'assets/images/property-23.jpg',
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
      image: 'assets/images/property-24.jpg',
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
      image: 'assets/images/property-25.jpg',
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
      image: 'assets/images/property-26.jpg',
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
      image: 'assets/images/property-27.jpg',
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
      image: 'assets/images/property-28.jpg',
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
      image: 'assets/images/property-29.jpg',
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
      image: 'assets/images/property-30.jpg',
      description:
        'Innovative tiny home with solar power and sustainable features.',
    },
  ];

  filteredProperties: Property[] = [];

  ngOnInit() {
    this.filteredProperties = [...this.properties];
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
    this.filteredProperties = this.properties.filter((property) => {
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
    });

    this.sortProperties();
  }

  sortProperties() {
    switch (this.sortBy) {
      case 'Price: Low to High':
        this.filteredProperties.sort((a, b) => a.rent - b.rent);
        break;
      case 'Price: High to Low':
        this.filteredProperties.sort((a, b) => b.rent - a.rent);
        break;
      case 'Bedrooms':
        this.filteredProperties.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'Bathrooms':
        this.filteredProperties.sort((a, b) => b.bathrooms - a.bathrooms);
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
}
