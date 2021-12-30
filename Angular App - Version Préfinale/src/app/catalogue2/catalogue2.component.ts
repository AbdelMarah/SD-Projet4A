import { Car } from './../Car';
import { User } from './../User';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../car.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-catalogue2',
  templateUrl: './catalogue2.component.html',
  styleUrls: ['./catalogue2.component.css']
})
export class Catalogue2Component implements OnInit{
  
  public cars : Car[];
  public selectedCar : Car;
  public carOwner : User;
  //private curentUser : User = this.authService.authenticatedUser;
  //private curentUserId = this.curentUser.idUser


  constructor(private carService :CarService, public authService:AuthenticationService) { }

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

  public onAddCar(addForm : NgForm) : Car{
    this.carOwner = this.authService.authenticatedUser;
    //this.carOwner.idUser = this.authService.authenticatedUser.idUser;
    console.log( this.carOwner);
    document.getElementById("add-car-form").click();
    this.carService.addCar(addForm.value,this.carOwner).subscribe(
      (response: Car)=> {
        response.carOwner = this.carOwner;
        this.selectedCar = response;
        console.log(response);
        console.log(this.selectedCar);
        this.getCars();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
    return this.selectedCar ;
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
