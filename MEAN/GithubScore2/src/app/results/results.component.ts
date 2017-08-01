import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { GithubapiserviceService } from '../githubapiservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Array<Player> = [];

  constructor(private _githubservice: GithubapiserviceService) { }

  ngOnInit() {
    this.results = this._githubservice.getresults();
  }

}
