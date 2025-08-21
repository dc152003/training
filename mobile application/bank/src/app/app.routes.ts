import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Transfer } from './components/transfer/transfer';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Notfound } from './components/notfound/notfound';
import { Viewaccdetails } from './components/viewaccdetails/viewaccdetails';
import { Whoisthisuser } from './services/whoisthisuser';
import { Contactus } from './components/contactus/contactus';
 
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'transfer', component: Transfer, canActivate: [Whoisthisuser] },
  { path: 'viewaccdetails', component: Viewaccdetails, canActivate: [Whoisthisuser] },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', component: Notfound },
  { path: 'contactus', component: Contactus },
 
];