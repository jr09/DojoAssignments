import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import { User } from './user';
import { Bike } from './bike'; 
import 'rxjs';

@Injectable()
export class UserserviceService {

  constructor(private _http: Http, private cookieService: CookieService) { }

  userLogin(user: any): Promise<User>{
    return this._http.post('/api/users/login', user)
    .map(data => data.json())
    .toPromise();
  }

  userRegister(user: User): Promise<User>{
    return this._http.post('/api/users/register', user)
    .map(data => data.json())
    .toPromise();
  }

  userLogout(user: User): Promise<User>{
    console.log("In user service to logout", user);
    return this._http.delete('/api/users/logout', user)
    .map(data => data.json())
    .toPromise();
  }

  userIndex(userId: string): Promise<User>{
    return this._http.get(`/api/users/index/${userId}`)
    .map(data => data.json())
    .toPromise();
  }

  getUserBikes(id: string): Promise<User>{
    return this._http.get(`/api/users/userBikes/${id}`)
    .map(data => data.json())
    .toPromise();
  }

  userIsValid(): boolean{
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && expired && userID && expired > Date.now());
  }
}
