import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
{ path: 'accueil', component: AcceuilComponent },
{ path: 'catalogue2', component: Catalogue2Component },
{ path: '', component: AcceuilComponent },
{ path: 'signup',component: SignupComponent },
{ path: 'register',component: RegisterComponent },

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
