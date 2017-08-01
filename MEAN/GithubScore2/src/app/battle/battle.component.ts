import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { GithubapiserviceService } from '../githubapiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  errors1: string;
  errors2: string;
  player1: Player;
  player2: Player;
  form1_completed;
  form2_completed;
  results: Array<Player>;

  constructor(private _githubservice: GithubapiserviceService, private _router: Router) { }

  ngOnInit() {
    this.form1_completed = 0;
    this.form1_completed = 0;
    this.errors1 = "";
    this.errors2 = "";
    this.player1 = new Player();
    this.player2 = new Player();
    this.results = [];
  }

  saveplayer(player: Player){
    this._githubservice.saveplayerdb(player)
    .then(data => {
      console.log('Saved player, from battle component', data)
    })
    .catch(error => console.log(error));
  }

  player1submit(event){
    event.preventDefault();
    this._githubservice.getuserinfo(this.player1.username)
    .then(data => {
      this.player1.avatar = data.avatar_url;
      this.player1.score = 12*(data.followers + data.public_repos);
      this.form1_completed = 1;
      this.errors1 = "";
    })
    .then(() => this.saveplayer(this.player1))
    .catch(error => {
      if(error.statusText == "Not Found"){
        this.errors1 = "User not found, please try again"
      }
    })
  }

  player2submit(event){
    event.preventDefault();
    this._githubservice.getuserinfo(this.player2.username)
    .then(data => {
      this.player2.avatar = data.avatar_url;
      this.player2.score = 12*(data.followers + data.public_repos);
      this.form2_completed = 1;
      this.errors2 = "";
    })
    .then(() => this.saveplayer(this.player2))
    .catch(error => {
      if(error.statusText == "Not Found"){
        this.errors1 = "User not found, please try again"
      }
    })
  }

  doBattle(){
    if(this.player1.score > this.player2.score){
      this.results.push(this.player1);
      this.results.push(this.player2);
    }
    else{
      this.results.push(this.player2);
      this.results.push(this.player1);
    }
    this._githubservice.saveresults(this.results);
    this.player1 = new Player();
    this.player2 = new Player();
    this._router.navigate(['results']);
  }
}
