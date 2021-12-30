import { Component } from '@angular/core';
import { Car } from '../Car';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent  {

  public cars : Car[];
  

  constructor(public authService:AuthenticationService) { }

  

}
