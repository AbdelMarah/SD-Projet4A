import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../Services/client-service.service';
import { Client } from '../../Classes/client';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  client: Client;
  public acceptationTerms: boolean ;
  public plusInfo: boolean ;

  constructor(private authService:AuthenticationService,private router: Router,private clientService: ClientService) {
    this.client = new Client();
  }
  //private clientService: ClientService => injection de dependance, il va cree un attribut "clientService" et lui initialise dans le constructeur

  onSubmit() {
    if(this.authService.CheckEmail(this.client.email)){
      if  (this.client.password==this.client.password2){
        this.client.password=btoa(this.client.password);
        this.clientService.save(this.client).subscribe(result => this.gotoSignup()); //"".subscribe" : pour ne pas etre bloque => reactivite
        alert("Votre compte a été crée, Veuillez se connecter");
      }
      else{
        alert("mots de passe ne sont pas identiques");
      } 
    }  
  }

  gotoSignup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit(): void {
    this.authService.getClients();
  }
}