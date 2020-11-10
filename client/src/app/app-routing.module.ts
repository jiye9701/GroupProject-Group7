import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent, data: {title: 'Home'}},
  {path: 'about', component : AboutComponent, data: {title: 'About'}},
  {path: 'products', component : ProductsComponent, data: {title: 'Create Survey'}},
  {path: 'services', component : ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component : ContactComponent, data: {title: 'Contact'}},
  {path: '', redirectTo : '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

