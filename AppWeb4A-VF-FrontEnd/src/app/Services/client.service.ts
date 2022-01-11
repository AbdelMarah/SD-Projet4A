import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../Classes/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
  public host: string;

  constructor(private http: HttpClient) {
    this.host = 'http://localhost:8080';
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
