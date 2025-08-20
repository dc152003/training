import { Routes } from '@angular/router';
import { Security } from './services/security';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'tranfer',
    loadComponent: () => import('./tranfer/tranfer.page').then( m => m.TranferPage ), canActivate: [Security]
  },
  {
    path: 'viewaccdetails',
    loadComponent: () => import('./viewaccdetails/viewaccdetails.page').then( m => m.ViewaccdetailsPage)
  },
];
