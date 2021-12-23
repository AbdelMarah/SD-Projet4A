import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Catalogue2Component } from './catalogue2/catalogue2.component';

const routes: Routes = [ { 
  path: 'accueil', component: AcceuilComponent },
{ path: 'catalogue2', component: Catalogue2Component },
{ path: '', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
