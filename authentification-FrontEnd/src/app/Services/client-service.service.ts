import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../Classes/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';
  }

  public getClients(): Observable<Client[]> { //return un objet de type Observable
    return this.http.get<Client[]>(this.usersUrl+"/findClients");
  }
  
  // this.clientService.getClients().subscribe(data => {
  //   this.users = data;
  // });

  public save(client: Client) {
    return this.http.post<Client>(this.usersUrl+"/addClient", client);
  }
}
