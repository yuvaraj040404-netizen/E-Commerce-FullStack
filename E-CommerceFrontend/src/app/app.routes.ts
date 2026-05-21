import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { AddProductComponent } from './components/add-product/add-product';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '**', redirectTo: '' } 
];