import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car} from '../Classes/car';
import { environment } from 'src/environments/environment';
import { Client } from '../Classes/client';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public Url = 'http://localhost:8080' ;
  private cars;

  //on inject http qui va envoyer des requetes au back
  constructor(private http : HttpClient) { }

  public getResource(url){
    return this.http.get(url);
  }

  // public getCars() : void {
  //   this.getResource(this.Url+"/vehicules").subscribe(
  //     response=> {
  //       this.cars = response;
  //       this.cars = this.cars._embedded.vehicules;
  //     },
  //     (error: HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //     );
  // }
  // public getCars() : Observable<Car[]> {
  //   return this.http.get<Car[]>(this.Url+"/findAllCars");
  // }

  public getOneCar(id : number): Observable<Car> {
    return this.http.get<Car>(this.Url+"findAllCars/"+id);
  }

  public addCar(car : Car) : Observable<Car> {
    return this.http.post<Car>(this.Url+"/add",car);
  }

  public updateCar(car : Car) : Observable<Car> {
    return this.http.put<Car>(this.Url+"/Cars/update",car);
  }

  public deleteCar(carId : number) : Observable<void> {
    return this.http.delete<void>(this.Url+"/Cars/delete/"+carId);
  } 

  public getClientCar(id : number): Observable<Client> {
    return this.http.get<Client>(this.Url+"/vehicules/"+id+"/client");
  }

}

