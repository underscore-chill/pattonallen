import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  comments: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  userTypes = [
    { value: 'tenant', label: 'Tenant' },
    { value: 'owner', label: 'Property Owner' },
    { value: 'realtor', label: 'Realtor' },
    { value: 'prospective_tenant', label: 'Prospective Tenant' },
    { value: 'prospective_owner', label: 'Prospective Property Owner' },
    { value: 'other', label: 'Other' },
  ];

  fb = inject(FormBuilder);
  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      userType: ['tenant', Validators.required],
      comments: ['', Validators.required],
      recaptcha: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.contactForm.value);

    // Simulate successful submission
    this.success = true;
    this.submitted = false;
    this.contactForm.reset();

    // Reset form state after showing success message
    setTimeout(() => {
      this.success = false;
    }, 5000);
  }

  formatPhoneNumber(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 10) {
      input = input.substring(0, 10);
    }
    this.contactForm.patchValue({ phone: input });
  }
}
