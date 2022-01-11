import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { AuthenticationService } from '../Services/authentication.service';
import { ClientService } from '../Services/client.service';

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


  Navigate(id) {
    this.router.navigate(['/catalogue/'+id])
  }

  Navigate1() {
    if (this.authService.isAuthenticated()){
      this.router.navigate(['/catalogue/0'])
    }
    else{
      this.router.navigate(['/signup'])
    }
  }

  }
