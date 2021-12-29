import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/Classes/car';
import { Category } from 'src/app/Classes/category';
import { Client } from 'src/app/Classes/client';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CarService } from 'src/app/Services/car.service';
import { ClientService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  car: Car;
  clientCar: Client;
  category: Category;
  public cars;
  public folderPhoto = "./assets/img/examples/"; 
  public selectedCar : Car;
  currentCategorie;
  categories;
  currentRequest;

  constructor(private clientService: ClientService, public authService:AuthenticationService, public carService :CarService, private route:ActivatedRoute, private http : HttpClient, private router :Router) { 
    this.car=new Car();
    this.category=new Category();
    this.category.idCategory=1;
    this.category.name="Citadine";
    this.category.photo="citadine.JPG";
  }

  ngOnInit(): void {
    this.getCarsAll();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        //let p1=this.route.snapshot.params['id'];
        let p1=url[11];
        // let idCat=this.route.snapshot.params['p2'];
        if (p1=="0"){
          this.getCarsAll();
        }
        if (p1=="2"){
          //let idCat=this.route.snapshot.params['p2'];
          let idCat=url[13];
          //this.title="Produits de la catégorie "+idCat;
          this.currentRequest='/categories/'+idCat+'/vehicules';
          this.getCars(this.currentRequest);
        }
      }
    })
    
  }
  
  private getCarsAll() : void {
    this.getCars("/vehicules");
  }

  private getCars(url) {
    this.clientService.getResource(this.clientService.host+url)
      .subscribe(data=>{
        this.cars=data;
        this.cars=this.cars._embedded.vehicules;
      },err=>{
        console.log(err);
      })
  }


  public getClient(id): Observable<Client> { //return un objet de type Observable
    return this.http.get<Client>(this.clientService.host+"/vehicules/"+id+"/client");
  }

  public getClientCar(id) {
    if(id){
      this.getClient(id).subscribe(data => {
        this.clientCar = data;
      });
    }
  }

  public getClientCar2() {
    // this.clientService.getResource(this.clientService.host+"/vehicules/2/client")
    //   .subscribe(data=>{
    //     this.clientCar=data;
    //     // this.cars=this.cars._embedded.vehicules;
    //   },err=>{
    //     console.log(err);
    //   })
    // this.clientCar=this.clientService.getResource(this.clientService.host+"/vehicules/2/client");
    // console.log(this.clientCar);
    // return this.clientCar.nom;
  }

  // private clickButton(buttonId : string): void{
  //   document.getElementById(buttonId).click();
  // }

  public onSelectCar(selectedCar : Car) : void {
    this.selectedCar = selectedCar;
    this.getClientCar(this.selectedCar.id);
    // this.clickButton("openCarInfo");
  }

  onSubmit() {
    this.car.client=new Client();
    this.car.category=new Category();
    this.car.category=this.category;
    console.log(this.category);
    console.log(this.car.category);
    this.car.client=this.authService.authenticatedUser;
    console.log(this.car.client);
    this.carService.addCar(this.car).subscribe(); //"".subscribe" : pour ne pas etre bloque => reactivite
    this.router.navigateByUrl('/catalogue/0/0');
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
      //this.getCars("/vehicules");
      //alert("No")
    }
}

}
