import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { GithubapiserviceService } from '../githubapiservice.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  rankings: Array<Player> = [];
  constructor(private _githubservice: GithubapiserviceService) { }

  ngOnInit() {
    this._githubservice.getPlayersDesc()
    .then(players => this.rankings = players)
    .then(() => console.log(this.rankings))
    .catch(error => console.log(error))
  }

}
