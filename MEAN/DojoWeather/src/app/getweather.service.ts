import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class GetweatherService {

  constructor(private _http: Http) { }

  getcityweather(city_name){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city_name+'&units=metric&APPID=6c8299610707d39a86f9eba789aa2ce9').map(data => data.json()).toPromise();
  }
}
