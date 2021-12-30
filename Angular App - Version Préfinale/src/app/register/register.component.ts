import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../Services/client-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: User;

  constructor(private authService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { 
      this.client = new User();
    }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.router.navigateByUrl('signup');
    this.clientService.save(this.client)
    .subscribe(result => this.gotoUserList()); //"".subscribe" : pour ne pas etre bloque => reactivite
    this.authService.getClients();
    alert("Votre compte a ete crée, Veuillez vous connecter");
    this.router.navigate(['/signup']);
  }

  onDialogue(){
    alert("test alert");
  }

  gotoUserList() {
    this.router.navigate(['/clients']);
  }


}
