import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
},
{
  path: 'product',
  component: ProductComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'product/edit/:id',
  component: EditProductComponent
},
{
  path: 'customer/edit/:id',
  component: EditCustomerComponent
},
{
  path: 'addProduct',
  component: AddProductComponent
},
{
  path: 'addCustomer',
  component: AddCustomerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
