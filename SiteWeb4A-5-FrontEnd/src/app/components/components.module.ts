import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { NgbdDatepickerRangePopup } from '../datepicker-range-popup/datepicker-range-popup.component';
import { UserListComponent } from './user-list/user-list.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule
    ],
    declarations: [
        ComponentsComponent,
        NgbdDatepickerRangePopup,
        UserListComponent,
        CatalogueComponent,
        CarsComponent,
        CarComponent,

    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
