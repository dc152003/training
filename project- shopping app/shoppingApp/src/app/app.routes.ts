


import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { AddProductComponent } from './components/addproduct/addproduct';
import { UpdateProductComponent } from './components/updateproduct/updateproduct';
import { DeleteProductComponent } from './components/deleteproduct/deleteproduct';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'update', component: UpdateProductComponent },
  { path: 'delete', component: DeleteProductComponent },
  { path: 'about', component: About }
];