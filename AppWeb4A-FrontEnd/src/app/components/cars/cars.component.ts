import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Car } from 'src/app/Classes/car';
import { Category } from 'src/app/Classes/category';
import { Client } from 'src/app/Classes/client';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CarService } from 'src/app/Services/car.service';
import { ClientService } from 'src/app/Services/client.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  car: Car;
  clientCar: Client;
  categoryCar: Category;
  categories;
  public cars;
  public selectedCar : Car;
  currentRequest;
  public title;

  selectedFiles: any;
  progress: number;

  constructor(private clientService: ClientService, public authService:AuthenticationService, public carService :CarService, private route:ActivatedRoute, private http : HttpClient, private router :Router) {
    this.car=new Car();
  }

  ngOnInit(): void {
        this.getCategories();
        let url = window.location.pathname;

        this.getCarsbyCategory(url);

        this.router.events.subscribe((val) => {
          if (val instanceof NavigationEnd ) {
            let url = val.url;
            this.getCarsbyCategory(url);
          }
        })

  }

  private getCarsAll() {
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

  // Get Cars by category Or get AllCars
  private getCarsbyCategory(url) {
    //let p1=this.route.snapshot.params['id'];
    let p1=url[11];
    if (p1=="0"){
      this.title="Tous les anonces";
      this.getCarsAll();
    }
    else if (p1 in ['1','2','3','4','4']){
      //let idCat=this.route.snapshot.params['p2'];
      // let idCat=url[13];
      let categoriesNames = ['Citadine','Utilitaire','Sport','Voiturette']
      this.title="Les anonces de la catégorie : "+categoriesNames[p1-1];
      this.currentRequest='/categories/'+p1+'/vehicules';
      this.getCars(this.currentRequest);
    }
  }


  public onSelectCar(selectedCar : Car) : void {
    this.selectedCar = selectedCar;
    this.getCarClient(this.selectedCar.id);
  }

  // Get car owner
  public getCarClient(id) {
    if(id){
      this.carService.getCarClient(id).subscribe(data => {
        this.clientCar = data;
      })
    }
  }

  private getCategories() {
    this.clientService.getResource(this.carService.Url+"/categories")
      .subscribe(data=>{
        this.categories=data;
        this.categories=this.categories._embedded.categories;
      },err=>{
        console.log(err);
      })
    return true;
  }

  //AddCar
  onSubmit() {
    this.car.client=new Client();
    this.car.client=this.authService.authenticatedUser;
    this.car.category=new Category();
    if(this.getCategories()){
      for (const category of this.categories){
        if(category.name==this.categoryCar){
          this.car.category=category;
        }
      }
    }
    this.carService.addCar(this.car).subscribe(); //"".subscribe" : pour ne pas etre bloque => reactivite
    window.location.reload();
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
      this.getCarsAll();
    }
  }

  public supprimerCar(selectedCar : Car){
    this.carService.deleteCar(selectedCar).subscribe();
    window.location.reload();
  }

  // Methodes qui ne sont pas utilisees, (Pour uploader une photo d'une voiture)
  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
    console.log(event);
  }
  uploadPhoto() {
    this.progress = 0;
    let photoname = this.selectedFiles.item(0).name;
    console.log(photoname);
    let photoname2 = this.selectedFiles.item(0).name();
    console.log(photoname);
  }

}
