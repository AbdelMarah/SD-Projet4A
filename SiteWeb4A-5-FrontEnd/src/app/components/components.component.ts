import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { AuthenticationService } from '../Services/authentication.service';
import { ClientService } from '../Services/client-service.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: []
  })
  export class ComponentsComponent implements OnInit {

    cat:CatalogueComponent;
  
    constructor(private clientService: ClientService, public authService:AuthenticationService, private router: Router) {
       this.cat= new CatalogueComponent(clientService,router);
     }
  
    ngOnInit(): void {
    }

    
  Navigate() {
    //this.router.navigateByUrl('/products/2/'+c.id);
    // this.router.navigate(['/catalogue/2/'+c.idCategory, {outlets: {'list': ['cars']}}]);
    this.router.navigate(['/catalogue/0/0'])
    // if(this.router.navigate(['/catalogue/0/0'])){
    //   this.router.navigate(['/catalogue/0/0'])
    //   this.cat.getProductsByCat({'idCategory':'2'});
    // }
  }

  Navigate1() {
    if (this.authService.isAuthenticated()){
      this.router.navigate(['/catalogue/0/0'])
    }
    else{
      this.router.navigate(['/signup'])
    }
  }
  
  }