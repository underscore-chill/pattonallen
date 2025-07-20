import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { HttpStatusCode } from '@angular/common/http';

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
  isLoading = signal<boolean>(false);
  success = signal<boolean>(false);

  toastr = inject(ToastrService);

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

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.toastr.error('Please fill in all required fields correctly.', 'Error');
      return;
    }
    
    // Here you would typically send the form data to your backend
    this.isLoading.set(true);
    console.log('Form submitted:', this.contactForm.value);
    try {
      // this.isSending.set(true);
      const response = await emailjs.send(
        'service_b1ay5nb',
        'template_h3ep0k4',
        this.contactForm.value,
        'CMVI5elZQNxHW2BEF'
      );
      if (response.status != HttpStatusCode.Ok) {
        // this.submitted.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.',
          'Error'
        );
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.toastr.success(
          'Thank you! Your viewing appointment request has been submitted. We will contact you within 24 hours to confirm your appointment.',
          'Success'
        );
        this.success.set(true);
        this.isLoading.set(false);
        this.contactForm.reset();
        return;
      }
    } catch (error: any) {
      this.toastr.error('Message not sent. Try again.', 'Error');
    }

    setTimeout(() => {
      this.success.set(false);
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
