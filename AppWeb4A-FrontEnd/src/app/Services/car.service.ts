import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car} from '../Classes/car';
import { environment } from 'src/environments/environment';
import { Client } from '../Classes/client';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public Url = environment.apiBaseUrl ;

  //on inject http qui envoye des requetes au backEnd
  constructor(private http : HttpClient) { }

  public getResource(url){
    return this.http.get(url);
  }

  public getOneCar(id : number): Observable<Car> { //return un objet de type Observable
    return this.http.get<Car>(this.Url+"findAllCars/"+id);
  }

  public addCar(car : Car) : Observable<Car> {
    return this.http.post<Car>(this.Url+"/add",car);
  }

  public updateCar(car : Car) : Observable<Car> {
    return this.http.put<Car>(this.Url+"/Cars/update",car);
  }

  public deleteCar(car : Car) : Observable<void> {
    return this.http.delete<void>(this.Url+"/delete/"+car.id);
  }

  public getCarClient(id : number): Observable<Client> {
    return this.http.get<Client>(this.Url+"/vehicules/"+id+"/client");
  }

  public searchCar(key) : Observable<Car[]> {
    return this.http.get<Car[]>(this.Url+"/vehicules/search/vehiculesByKeyword/"+{key});
  }

}

