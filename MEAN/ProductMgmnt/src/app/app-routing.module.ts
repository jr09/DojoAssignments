import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ProductEditComponent } from './product-edit/product-edit.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductNewComponent } from './product-new/product-new.component'

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  {path: "productsList", component: ProductListComponent},
  {path: "createProduct", component: ProductNewComponent},
  {path: "products/edit/:id", component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
