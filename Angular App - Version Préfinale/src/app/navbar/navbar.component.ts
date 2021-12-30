import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private  router:Router,public authService:AuthenticationService) {
    }
    
    ngOnInit() {
    }
 
    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      }
  }


