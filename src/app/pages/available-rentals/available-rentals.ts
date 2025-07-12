import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertyDetail } from './property-detail/property-detail';
import { properties, Property } from '../../../data/properties';

@Component({
  selector: 'app-available-rentals',
  standalone: true,
  imports: [RouterModule, FormsModule, PropertyDetail, CurrencyPipe],
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

  properties: Property[] = properties;
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
            .includes(this.searchTerm.toLowerCase());

        const matchesCity =
          !this.selectedCity || this.selectedCity === 'All Cities';

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
