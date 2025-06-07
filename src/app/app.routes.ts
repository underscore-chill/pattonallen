import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'tenants',
    loadComponent: () =>
      import('./pages/tenants/tenants').then((m) => m.Tenants),
  },
  {
    path: 'owners',
    loadComponent: () => import('./pages/owners/owners').then((m) => m.Owners),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'realtor-referral',
    loadComponent: () =>
      import('./pages/about/realtor-referral/realtor-referral').then(
        (m) => m.RealtorReferral
      ),
  },
  {
    path: 'available-rentals',
    loadComponent: () =>
      import('./pages/available-rentals/available-rentals').then(
        (m) => m.AvailableRentals
      ),
  },
];
