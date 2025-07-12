import { Component, output, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Property {
  id: number;
  title: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  rent: number;
  every?: string;
  sqrFt?: string;
  availableDate: string;
  propertyType: string;
  image: string;
  images: string[];
  description: string;
}

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './property-detail.html',
  styleUrls: ['./property-detail.css'],
})
export class PropertyDetail {
  property = input<Property | null>(null);
  isVisible = input<boolean>(false);
  close = output<void>();

  currentImageIndex = signal<number>(0);

  nextImage() {
    const property = this.property();
    if (property && this.currentImageIndex() < property.images.length - 1) {
      this.currentImageIndex.update((index) => index + 1);
    }
  }

  previousImage() {
    if (this.currentImageIndex() > 0) {
      this.currentImageIndex.update((index) => index - 1);
    }
  }

  selectImage(index: number) {
    this.currentImageIndex.set(index);
  }

  onClose() {
    this.currentImageIndex.set(0);
    this.close.emit();
  }

  scheduleViewing() {
    console.log('Schedule viewing for:', this.property()?.title);
    // Implement scheduling logic
  }

  submitApplication() {
    console.log('Submit application for:', this.property()?.title);
    // Implement application logic
  }
}
