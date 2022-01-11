import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Car } from 'src/app/Classes/car';
import { Category } from 'src/app/Classes/category';
import { Client } from 'src/app/Classes/client';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CarService } from 'src/app/Services/car.service';
import { ClientService } from 'src/app/Services/client.service';
// import {CatalogueComponent} from "../catalogue/catalogue.component";

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
  // public folderPhoto = "./assets/img/examples/";
  public selectedCar : Car;
  currentRequest;
  // catalogueComponent;
  public title;
  // public test;

  selectedFiles: any;
  progress: number;

  constructor(private clientService: ClientService, public authService:AuthenticationService, public carService :CarService, private route:ActivatedRoute, private http : HttpClient, private router :Router) {
    this.car=new Car();
    // this.catalogueComponent = new CatalogueComponent(clientService,router);
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

  // public getClientAnonces() {
  //   let idClient=this.authService.authenticatedUser.idClient;
  //   console.log(idClient);
  //   console.log(this.cars);
  //   this.router.navigate(['/catalogue/0']);
  //   console.log(this.cars);
  // }

  // Get car owner
  // public getCarClient2(id) {
  //   if(id) {
  //     this.carService.getCarClient(id).subscribe(data => {
  //       let client = data;
  //       if (client.idClient == this.authService.authenticatedUser.idClient){
  //         this.test=1;
  //       }
  //     })
  //   }
  //   return this.test;
  // }

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
    // this.carService.searchCar(key).subscribe(data=>{
    //   this.cars=data;
    // },err=>{
    //   console.log(err);
    // });
    const results : Car[] = [];
    for (const car of this.cars){
      if(car.name.toLowerCase().indexOf(key.toLowerCase())!==-1){
        results.push(car);
        //console.log(results);
      }
    }
    this.cars = results;
    if(results.length === 0 || !key){
      this.getCarsAll();
    }
  }

  // private activeCategory(idCategory){
  //   if(this.getCategories()){
  //     console.log("test"+this.categories);
  //     //this.catalogueComponent.getProductsByCat(this.categories[idCategory])
  //     this.catalogueComponent.currentCategorie=this.categories[idCategory];
  //   };
  // }

  public supprimerCar(selectedCar : Car){
    this.carService.deleteCar(selectedCar).subscribe();
    window.location.reload();
  }


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
    // this.catService.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     this.progress = Math.round(100 * event.loaded / event.total);
    //   } else if (event instanceof HttpResponse) {
    //     //console.log(this.router.url);
    //     //this.getProducts(this.currentRequest);
    //     //this.refreshUpdatedProduct();
    //     this.currentTime=Date.now();
    //   }
    // },err=>{
    //   alert("Problème de chargement");
    // })
    //
    // this.selectedFiles = undefined
  }

}
