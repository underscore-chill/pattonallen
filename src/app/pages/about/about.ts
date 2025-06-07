import { Component, signal } from '@angular/core';

interface Team {
  nameAndRole: string;
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
      nameAndRole: 'Irene Lopez de Carrizosa, Property Manager',
      image: '/images/team-one.jpg',
      bio: `Irene's experience in real estate sales on one of Asheville's top
            real estate teams, coupled with her success as a residential leasing
            agent in New York City made her move to Property Management in 2020
            a natural transition. She has a passion for real estate and supports
            her clients in their investments by prioritizing communication,
            providing exceptional customer service, and staying current on the
            changes in our fast-paced local market. As a member of the National
            Association of Residential Property Managers, Irene is always
            focused on expanding her knowledge and understanding in this field.
            She joined Patton Allen because she aligned deeply with their
            dedication to providing an extraordinary experience to both owners
            and tenants, and because of the company's commitment to supporting
            the local community.`,
    },
    {
      nameAndRole: 'Satorria Jones, Finance Manager',
      image: '/images/team-two.jpg',
      bio: 'Satorria was born and raised in Asheville, NC. She completed her undergraduate studies at The University of North Carolina at Pembroke and wrapped up her master’s degree this year. She joined the Patton Allen team as the Administrative Coordinator and quickly worked her way up to the Finance Manager role thanks to her past administrative experience in the automotive industry and advanced schooling in accounting. Outside of the workplace she loves to spend time with her son Kane, binge watch crime shows, read, and cook big Sunday dinners.',
    },
    {
      nameAndRole: 'Todd Rullman, Assistant Property Manager',
      image: '/images/team-five.webp',
      bio: 'Todd has worked as a real estate broker in Georgia and Florida, bringing 14 years of sales experience and 8 years of property management experience. He graduated from Kennesaw State University, where he majored in business management with an entrepreneurial focus and minored in marketing. He enjoys building relationships, taking on a challenge, and exceeding expectations. After having the opportunity live and work in several different cities, Todd is proud to call Asheville home. When he’s not being an assistant to the property manager, Todd enjoys spending time with his partner and their two pups. Usually, you’ll find them hiking before trying out a new brewery or restaurant.',
    },
    {
      nameAndRole: 'Desaree Jennings, Tenant Services Coordinator',
      image: '/images/team-three.jpg',
      bio: 'Desaree is a born and raised Asheville native who worked in food service all around Asheville before joining Patton Allen. Her experience in hospitality coupled with her bachelor’s in English received from the UNC Asheville have facilitated her commitment to clear, informative, and compassionate communication with all people. Desaree’s favorite hobby is having hobbies, whether that be hiking, reading, knitting, weightlifting, paddleboarding, or just hanging out with her cat.',
    },
    {
      nameAndRole: 'Lemuel Overton, Customer Service Specialist',
      image: '/images/team-six.avif',
      bio: 'With a Bachelor’s degree from a prestigious maritime university in the Philippines, Lem brings a unique global perspective to his work. After years spent sailing across continents and immersing himself in different cultures, he shifted his focus to customer service, building over six years of experience in technical support and sales. Lem is known for his patience, empathy, and ability to make people feel heard and understood. These qualities shine through whether he’s assisting a current tenant, guiding a prospective tenant exploring our listings, or helping someone navigate their first call with our team. Outside of work, Lem dedicates his weekends to teaching English to Filipino and Chinese students, sharing his love for language and learning. He also enjoys spending quality time with his family, often gathered around a barbecue and plenty of laughter.',
    },
  ]);
}
