import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car} from './Car';
import { environment } from 'src/environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiServerUrl = environment.apiBaseUrl ;

  //on inject http qui va envoyer des requetes au back
  constructor(private http : HttpClient) { }

  public getCars() : Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/Cars/findAllCars`);
  }

  public getOneCar(id : number): Observable<Car> {
    return this.http.get<Car>(`${this.apiServerUrl}/Cars/findAllCars/${id}`);
  }

  public addCar(car : Car, owner : User) : Observable<Car> {
    car.carOwner = owner;
    return this.http.post<Car>(`${this.apiServerUrl}/Cars/add`,car);
  }

  public updateCar(car : Car) : Observable<Car> {
    return this.http.put<Car>(`${this.apiServerUrl}/Cars/update`,car);
  }

  public deleteCar(carId : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Cars/delete/carId`);
  } 

}
