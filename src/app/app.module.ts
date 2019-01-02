import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './modules/front-page/carousel/carousel.component';
import { FrontPageModule } from './modules/front-page/front-page.module';
import { ContactComponent } from './modules/front-page/contact/contact.component';
import { ProductsComponent } from './modules/front-page/products/products.component';
import { CakesComponent } from './modules/front-page/cakes/cakes.component';
import { CoffeesComponent } from './modules/front-page/coffees/coffees.component';
import { LunchesComponent } from './modules/front-page/lunches/lunches.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent,CarouselComponent,ProductsComponent,LunchesComponent,ContactComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
