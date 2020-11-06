import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';

import { HeaderComponent } from './partials/header/header.component'; // Remove it later after find out what problem is to connect partials and pages module
import { FooterComponent } from './partials/footer/footer.component'; // Remove it later after find out what problem is to connect partials and pages module
import { HomeComponent } from './pages/home/home.component'; // Remove it later after find out what problem is to connect partials and pages module
import { AboutComponent } from './pages/about/about.component'; // Remove it later after find out what problem is to connect partials and pages module
import { ContactComponent } from './pages/contact/contact.component'; // Remove it later after find out what problem is to connect partials and pages module
import { ProductsComponent } from './pages/products/products.component'; // Remove it later after find out what problem is to connect partials and pages module
import { ServicesComponent } from './pages/services/services.component'; // Remove it later after find out what problem is to connect partials and pages module
import { BasePageComponent } from './partials/base-page/base-page.component'; // Remove it later after find out what problem is to connect partials and pages module

//import { PartialsModule } from './partials/partials.module'; // Remove comment later after find out what problem is to connect partials and pages module
//import { PagesModule } from './pages/pages.module'; // Remove comment later after find out what problem is to connect partials and pages module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Remove it later after find out what problem is to connect partials and pages module
    FooterComponent, // Remove it later after find out what problem is to connect partials and pages module
    HomeComponent, // Remove it later after find out what problem is to connect partials and pages module
    AboutComponent, // Remove it later after find out what problem is to connect partials and pages module
    ContactComponent, // Remove it later after find out what problem is to connect partials and pages module
    ProductsComponent, // Remove it later after find out what problem is to connect partials and pages module
    ServicesComponent, // Remove it later after find out what problem is to connect partials and pages module
    BasePageComponent // Remove it later after find out what problem is to connect partials and pages module

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    //PartialsModule, // Remove comment later after find out what problem is to connect partials and pages module
    //PagesModule // Remove comment later after find out what problem is to connect partials and pages module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
