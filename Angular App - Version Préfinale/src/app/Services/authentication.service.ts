import { User } from './../User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//Service s'occuppant de la connexion des utilisateurs deja inscrits
export class AuthenticationService {

  private apiServerUrl = environment.apiBaseUrl ;
 
  public authenticated: boolean;
  public authenticatedUser : User;
  private users;

  constructor(private http:HttpClient) {
    this.getClients();
   }

  public getResource(url: string){
    return this.http.get(url);
  
  }

  public getClients() {
    this.getResource(this.apiServerUrl+"/users/findUsers")
      .subscribe(data=>{
        this.users=data;
      },err=>{
        console.log(err);
      })
  }

  getName(){
    return "Welcome "+this.authenticatedUser.nom +" "+this.authenticatedUser.prenom;
  }

  login(email:string, password:string){
    let user;
    this.users.forEach(u=>{
      if(u.email===email && u.password===password){
        user=u;
      }
    })
    if(user){
      this.authenticated=true;
      this.authenticatedUser=user;
      localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
    }
    else{
      this.authenticated=false;
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
      return this.authenticatedUser.role=="ADMIN";
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
