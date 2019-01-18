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
import { MenuComponent } from './modules/front-page/menu/menu.component';
import { GalleryComponent } from './modules/front-page/gallery/gallery.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule  } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    FrontPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent,CarouselComponent,ProductsComponent,MenuComponent,LunchesComponent,GalleryComponent,ContactComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
