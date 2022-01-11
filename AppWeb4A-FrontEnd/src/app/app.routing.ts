import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'register',          component: RegisterComponent },
    { path: 'users', component: UserListComponent },
    // { path: 'catalogue/:p1/:p2', component: CatalogueComponent, children: [
    //   { path: 'cars', component: CarsComponent , outlet: 'list'}] },
    {path: 'catalogue/:p1', component: CatalogueComponent },
    { path: 'cars', component: CarsComponent} ,
    { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
