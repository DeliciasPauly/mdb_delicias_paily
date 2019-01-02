import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CarouselComponent } from './carousel/carousel.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CakesComponent } from './cakes/cakes.component';
import { LunchesComponent } from './lunches/lunches.component';
import { CoffeesComponent } from './coffees/coffees.component';

@NgModule({
  declarations: [CarouselComponent, PricesComponent, ContactComponent, ProductsComponent, CakesComponent, LunchesComponent, CoffeesComponent],
  imports: [
    CommonModule,        
    MDBBootstrapModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class FrontPageModule { }
