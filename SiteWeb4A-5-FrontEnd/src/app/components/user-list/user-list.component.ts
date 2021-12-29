import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Client } from '../../Classes/client';
import { ClientService } from '../../Services/client-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Client[];
  // public selectedClient : Client;

  constructor(private clientService: ClientService, public authService:AuthenticationService) {
  }

  ngOnInit() {
    if(this.authService.isAdmin()){
      this.clientService.getClients().subscribe(data => {
        this.users = data;
      });
    } 
  }

  public supprimerClient(selectedClient : Client) : void {
    //this.selectedClient = selectedClient;
    console.log(selectedClient.idClient);
    this.clientService.deleteClient(selectedClient.idClient);
  }
}