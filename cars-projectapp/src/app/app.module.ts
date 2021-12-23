import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CarService } from './car.service';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CatalogueComponent,
    Catalogue2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule 

  ],
  providers: [CarService,
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
