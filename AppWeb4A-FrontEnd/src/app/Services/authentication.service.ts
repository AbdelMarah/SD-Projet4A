import { Injectable } from '@angular/core';
import { Client } from '../Classes/client';
import { ClientService } from './client.service';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host = environment.apiBaseUrl;
  public authenticated: boolean;
  public authenticatedUser;
  users: Client[];


  constructor(private clientService: ClientService) {
  }

  public getClients() {
    this.clientService.getClients().subscribe(data => {
      this.users = data;
    });
    return true;
  }

  getName(){
    return this.authenticatedUser.nom +" "+this.authenticatedUser.prenom;
  }

  CheckEmail(email:string){
    let mail;
    this.users.forEach(u=>{
      if(u.email===email){
        mail=u.email;
      }
    })
    if(mail){
      alert("votre email existe déja, Veuillez se connecter");
      return false;
    }
    else{
      return true;
    }
  }

  login(email:string,password:string){
    let user;
    let mail;
    this.users.forEach(u=>{
      if(u.email===email){
        mail=u.email;
        if(u.password===password){
          user=u;
        }
      }
    })

    if(!mail){
      alert("votre email n'existe pas");
    }
    else{
      if(user){
        this.authenticated=true;
        this.authenticatedUser=user;
        localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
      }
      else{
        this.authenticated=false;
        alert("mot de passe incorect")
      }
    }

  }

  loadUser(){
    let user=localStorage.getItem('authenticatedUser');
    if(user){
      this.authenticatedUser=JSON.parse(user);
      this.authenticated=true;
    }
  }

  isAdmin(){
    if(this.authenticatedUser){
      return this.authenticatedUser.role=="ADMIN"||this.authenticatedUser.role=="SUPADMIN";
    }
    else return false;
  }


  isAuthenticated(){
    return this.authenticated;
  }

  logout(){
    this.authenticated=false;
    this.authenticatedUser=undefined;
    localStorage.removeItem('authenticatedUser');
  }
}
