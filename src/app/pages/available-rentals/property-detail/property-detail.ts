import { Component, output, input, signal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

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
  router = inject(Router);

  property = input<Property | null>(null);
  isVisible = input<boolean>(false);
  showCloseIcon = input<boolean>(true);
  showScheduleButton = input<boolean>(true);
  showApplicationButton = input<boolean>(true);
  modalContentClass = input<string>(
    'bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'
  );
  modalOverlayClass = input<string>(
    'fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4"'
  );
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
    this.router.navigate(['/rental-inquiry', this.property()?.id]);
  }

  submitApplication() {
    this.router.navigateByUrl('/contact');
  }
}
