import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CarService } from './car.service';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ClientService } from './Services/client-service.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    Catalogue2Component,
    SignupComponent,
    RegisterComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CarService,
    HttpClient,
    ClientService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
