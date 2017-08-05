import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bike } from './bike';
import 'rxjs';

@Injectable()
export class BikeserviceService {

  constructor(private _http: Http) { }

  getBikes(): Promise<Bike[]>{
    return this._http.get('/api/bikes')
    .map(data => data.json())
    .toPromise()
  }

  createBike(id: string, bike: Bike): Promise<Bike>{
    console.log('Received request to create bike in bike service', bike);
    return this._http.post(`/api/bikes/${id}`, bike)
    .map(data => data.json())
    .toPromise();
  }

  removeBike(bikeId: string): Promise<Bike>{
    return this._http.delete(`/api/bikes/${bikeId}`)
    .map(data => data.json())
    .toPromise();
  }
  updateBike(bike: Bike): Promise<Bike>{
    return this._http.put(`/api/bikes/${bike._id}`, bike)
    .map(data => data.json())
    .toPromise();
  }
}
