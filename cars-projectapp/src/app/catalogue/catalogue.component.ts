import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  cars : Car[];
  
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  
  getCars() : void {
    this.carService.getCars().subscribe(
      (response : Car[]) => {
        this.cars = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
  

 

}
