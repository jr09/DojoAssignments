import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';
import 'rxjs'

@Injectable()
export class GithubapiserviceService {

  results: Array<Player> = [];

  constructor(private _http: Http) { }

  getuserinfo(playername:string):Promise<any>{
    return this._http.get(`https://api.github.com/users/${playername}`)
    .map(data => data.json())
    .toPromise();
  }
  saveresults(battleResults: Array<Player>){
    this.results = battleResults;
  }
  getresults(): Array<Player>{
    return this.results;
  }
  saveplayerdb(player: Player): Promise<Player>{
    return this._http.post('/api/players', player)
    .map(data => data.json())
    .toPromise();
  }
  getPlayersDesc(): Promise<Player[]>{
    return this._http.get('/api/players')
    .map(data => data.json())
    .toPromise();
  }
}
