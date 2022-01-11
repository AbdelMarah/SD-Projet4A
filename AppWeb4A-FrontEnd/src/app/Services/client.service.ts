import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Classes/client';
import { Observable } from 'rxjs/Observable';
import {environment} from "../../environments/environment";

@Injectable()
export class ClientService {
  public host = environment.apiBaseUrl ;

  constructor(private http: HttpClient) {
  }

  public getResource(url){
    return this.http.get(url);
  }
  //on inject 'http' pour envoyer des requetes HTTP au BackEnd
  public getClients(): Observable<Client[]> { //returner un objet de type Observable
    return this.http.get<Client[]>(this.host+"/findClients");
  }

  public addClient(client: Client) {
    return this.http.post<Client>(this.host+"/addClient", client);
  }

  public deleteClient(client) : Observable<void> {
    return this.http.delete<void>(this.host+"/deleteClient/"+client.idClient);
  }
}
