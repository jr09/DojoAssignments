import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class HttpService {
  http_target: string = 'https://api.github.com/users/'
  constructor(private _http: Http) { }

  retreiveTasks(username){
    console.log(this.http_target+username);
      return this._http.get(this.http_target+username).map(data=>data.json()).toPromise();
    }
}

