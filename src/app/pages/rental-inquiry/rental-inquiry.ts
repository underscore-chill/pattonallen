// rental-inquiry.component.ts
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PropertyDetail } from '../available-rentals/property-detail/property-detail';
import { properties, Property } from '../../../data/properties';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-rental-inquiry',
  templateUrl: './rental-inquiry.html',
  styleUrl: './rental-inquiry.css',
  imports: [FormsModule, ReactiveFormsModule, PropertyDetail, CurrencyPipe],
})
export class RentalInquiryComponent implements OnInit {
  activeTab = signal<string>('contact');
  contactForm: FormGroup;
  scheduleForm: FormGroup;
  selectedTimeSlot = signal<string>('');
  minDate = signal<string>('');
  selectedProperty = signal<Property | null>(null);
  properties = signal<Property[]>(properties);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isSending = signal<boolean>(false);
  toastr = inject(ToastrService);

  timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
  ];

  partySizes = [
    { value: '1', label: 'Just me' },
    { value: '2', label: '2 people' },
    { value: '3', label: '3 people' },
    { value: '4', label: '4 people' },
    { value: '5+', label: '5+ people' },
  ];

  timePreferences = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 7 PM)' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });

    this.scheduleForm = this.fb.group({
      preferredDate: ['', [Validators.required]],
      timePreference: ['', [Validators.required]],
      selectedTime: ['', [Validators.required]],
      moveInDate: [''],
      partySize: ['1'],
      specialRequests: [''],
    });
  }

  ngOnInit(): void {
    // Set minimum date to today
    this.selectProperty();
    this.minDate.set(new Date().toISOString().split('T')[0]);
  }

  selectProperty(): void {
    const propertyId = this.activatedRoute.snapshot.params['propertyId'];
    const property = this.properties().find((p) => p.id == propertyId);
    if (property) {
      this.selectedProperty.set(property);
    } else {
      this.toastr.error('Property not found. Please select a valid property.');
      this.router.navigate(['/available-rentals']);
    }
  }

  switchTab(tabName: string): void {
    this.activeTab.set(tabName);
  }

  nextStep(): void {
    if (this.contactForm.valid) {
      this.activeTab.set('schedule');
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  previousStep(): void {
    this.activeTab.set('contact');
  }

  selectTimeSlot(timeSlot: string): void {
    this.selectedTimeSlot.set(timeSlot);
    this.scheduleForm.patchValue({ selectedTime: timeSlot });
  }

  async onSubmit(): Promise<void> {
    if (!this.selectedTimeSlot()) {
      this.markFormGroupTouched(this.scheduleForm);
      this.toastr.error('Please select a time slot for your viewing.');
      return;
    }

    if (this.contactForm.invalid) {
      this.activeTab.set('contact');
      this.markFormGroupTouched(this.contactForm);
      this.toastr.error(
        'Please fill out all required fields in the contact form.'
      );
      return;
    }
    if (this.scheduleForm.invalid) {
      this.activeTab.set('schedule');
      this.markFormGroupTouched(this.scheduleForm);
      this.toastr.error(
        'Please fill out all required fields in the schedule form.'
      );
      return;
    }

    const payload = {
      ...this.contactForm.value,
      ...this.scheduleForm.value,
    };

    console.log('Form submitted:', payload);
    try {
      this.isSending.set(true);
      const response = await emailjs.send(
        'service_b1ay5nb',
        'template_h3ep0k4',
        payload,
        'CMVI5elZQNxHW2BEF'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.',
          'Error'
        );
        return;
        ``;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success(
          'Thank you! Your viewing appointment request has been submitted. We will contact you within 24 hours to confirm your appointment.',
          'Success'
        );
        this.resetForm();
        return;
      }
    } catch (error: any) {
      this.isSending.set(false);
      this.toastr.error('Message not sent. Try again.', 'Error');
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.scheduleForm.reset();
    this.selectedTimeSlot.set('');
    this.activeTab.set('contact');
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(form: FormGroup, fieldName: string): string {
    const field = form.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
    }
    return '';
  }
}
