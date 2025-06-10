import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lexigray-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  serviceCards = [
    {
      title: 'Residential Rentals',
      image: 'images/residential.jpg',
      link: '/available-rentals',
      description: 'Find your perfect home or list your property with us',
    },
    {
      title: 'Realtor Referrals',
      image: '/images/commercial.jpg',
      link: '/realtor-referral',
      description: 'Partner with us for mutual success',
    },
    {
      title: 'Management Services',
      image: '/images/management.jpg',
      link: '/owners',
      description: 'Professional property management solutions',
    },
    {
      title: 'Contact Our Office',
      image: '/images/contact.jpg',
      link: '/contact',
      description: 'Get in touch with our expert team',
    },
  ];
}
