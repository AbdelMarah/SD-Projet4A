import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import {FooterComponent} from "./footer/footer.component";
import { SignupComponent } from './signup/signup.component';
import {RegisterComponent} from "./register/register.component";
import { UserListComponent } from './user-list/user-list.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CarsComponent } from './cars/cars.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule
    ],
    declarations: [
        ComponentsComponent,
        FooterComponent,
        RegisterComponent,
        SignupComponent,
        UserListComponent,
        CatalogueComponent,
        CarsComponent,
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
