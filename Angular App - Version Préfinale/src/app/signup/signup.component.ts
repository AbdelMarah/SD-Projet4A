import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public client: User = new User()  

  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(user: { email: string; password: string; }){
    this.authService.login(user.email,user.password);
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('');
    }

  }

}
