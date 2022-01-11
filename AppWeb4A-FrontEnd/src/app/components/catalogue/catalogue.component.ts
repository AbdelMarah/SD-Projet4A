import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  categories;
  public currentCategorie;
  cars;

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
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
    this.router.navigate(['/catalogue/'+c.idCategory]);
  }

  Navigate(){
    this.router.navigate(['/catalogue/0']);
    this.currentCategorie=undefined;
  }

}
