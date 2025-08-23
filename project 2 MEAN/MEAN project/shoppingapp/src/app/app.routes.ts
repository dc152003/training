import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { ProductsComponent } from './components/products/products';
import { AddproductComponent } from './components/addproduct/addproduct';
import { UpdateproductComponent } from './components/updateproduct/updateproduct';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'products', component: ProductsComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'updateproduct', component: UpdateproductComponent },
  { path: 'deleteproduct', component: DeleteproductComponent },
];
