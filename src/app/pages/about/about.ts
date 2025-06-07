import { Component, signal } from '@angular/core';

interface Team {
  name: string;
  role: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'pattonallen-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  teams = signal<Team[]>([
    {
      name: 'Patton Allen',
      role: 'Founder & CEO',
      image: 'assets/images/team-one.jpg',
      bio: 'Patton is a seasoned real estate professional with over 20 years of experience in the industry. He founded Patton Allen Real Estate to provide exceptional service and expertise to clients looking to buy, sell, or rent properties.',
    },
    {
      name: 'Jane Doe',
      role: 'Realtor',
      image: 'assets/images/team-two.jpg',
      bio: 'Jane is a dedicated realtor with a passion for helping clients find their dream homes. With her extensive knowledge of the local market, she ensures a smooth and successful transaction for every client.',
    },
    {
      name: 'John Smith',
      role: 'Property Manager',
      image: 'assets/images/team-three.jpg',
      bio: 'John is an experienced property manager who oversees the day-to-day operations of rental properties. His attention to detail and commitment to tenant satisfaction make him an invaluable asset to our team.',
    },
  ]);
}
