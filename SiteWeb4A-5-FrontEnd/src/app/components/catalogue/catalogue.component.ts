import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  categories;
  currentCategorie;
  cars;

  constructor(private clientService: ClientService, private  router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  private getCategories() {
    this.clientService.getResource(this.clientService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
  }

  public getProductsByCat(c: { idCategory: string; }) {
    this.currentCategorie=c;
    //this.router.navigateByUrl('/products/2/'+c.id);
    // this.router.navigate(['/catalogue/2/'+c.idCategory, {outlets: {'list': ['cars']}}]);
    this.router.navigate(['/catalogue/2/'+c.idCategory]);
    // console.log('/catalogue/2/'+c.idCategory);
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

  Navigate(){
    this.router.navigate(['/catalogue/0/0']);
    this.currentCategorie=undefined;
  }

}
