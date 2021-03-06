import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './Home-catalog/about/about.component';
import { CartComponent } from './home-catalog/cart/cart.component';

import { ContactComponent } from './home-catalog/contact/contact.component';
import { GalleryComponent } from './home-catalog/gallery/gallery.component';
import { HomeComponent } from './home-catalog/home/home.component';
import { OrdersComponent } from './home-catalog/orders/orders.component';
import { ProductModule } from './home-catalog/product/product.module';

import { ForgetPasswordComponent } from './membership/forget-password/forget-password.component';
import {LoginComponent} from './membership/login/login.component';
import { RegisterComponent } from './membership/register/register.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductModule},
  {path:'cart',component:CartComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'orders',component:OrdersComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [CartComponent,AboutComponent,LoginComponent,ForgetPasswordComponent,RegisterComponent,HomeComponent,ContactComponent,OrdersComponent,AboutComponent,ProductsComponent]
