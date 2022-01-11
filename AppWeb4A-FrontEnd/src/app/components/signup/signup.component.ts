import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from '../../Classes/client';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public client: Client = new Client()

  constructor(private clientService: ClientService, public authService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getClients();
  }

  onLogin(user: { email: string; password: string; }){
    user.password=btoa(user.password);
    this.authService.login(user.email,user.password);
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('');
    }

  }
}
