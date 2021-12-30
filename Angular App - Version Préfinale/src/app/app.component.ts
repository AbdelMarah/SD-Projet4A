import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public authService:AuthenticationService) {}

  ngOnInit(): void {
    this.authService.loadUser();;
  }

  
  
}
