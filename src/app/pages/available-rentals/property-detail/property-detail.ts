import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-detail.html',
  styleUrls: ['./property-detail.css'],
})
export class PropertyDetail {
  @Input() property: Property | null = null;
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();

  currentImageIndex = 0;

  nextImage() {
    if (
      this.property &&
      this.currentImageIndex < this.property.images.length - 1
    ) {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  onClose() {
    this.currentImageIndex = 0;
    this.close.emit();
  }

  scheduleViewing() {
    console.log('Schedule viewing for:', this.property?.title);
    // Implement scheduling logic
  }

  submitApplication() {
    console.log('Submit application for:', this.property?.title);
    // Implement application logic
  }
}
