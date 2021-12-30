import { User } from './../User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http:HttpClient) { 

  }

  //récupérer tous les utilisateurs 
  public findAll(): Observable<User[]> 
  { 
    return this.http.get<User[]>((`${this.apiServerUrl}/users/findUsers`));
  }

  //enregistrer un nouvel utilisateur
  public save(user: User) : Observable<User>
  {
    return this.http.post<User>(`${this.apiServerUrl}/users/addUser`,user);  
  }
}
