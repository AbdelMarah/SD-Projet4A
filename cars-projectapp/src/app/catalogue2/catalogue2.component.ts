import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-catalogue2',
  templateUrl: './catalogue2.component.html',
  styleUrls: ['./catalogue2.component.css']
})
export class Catalogue2Component implements OnInit{
  
  public cars : Car[];
  public selectedCar : Car;

  constructor(private carService :CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  
  private clickButton(buttonId : string): void{
    document.getElementById(buttonId).click();
  }

  public onSelectCar(selectedCar : Car) : void {
    this.selectedCar = selectedCar;
    this.clickButton("openCarInfo");
  }

  public searchCars(key : string): void {
      const results : Car[] = [];
      for (const car of this.cars){
        if(car.name.toLowerCase().indexOf(key.toLowerCase())!==-1){
          results.push(car);
        }
      }
      this.cars = results;
      if(results.length === 0 || !key){
        this.getCars();
      }
  }

  public getCars() : void {
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
