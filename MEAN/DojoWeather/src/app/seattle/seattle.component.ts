import { Component, OnInit } from '@angular/core';
import { GetweatherService } from '../getweather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
humidity;
  avg_temp;
  max_temp;
  min_temp;
  status;


  constructor(private _getweatherService: GetweatherService) { }

  ngOnInit() {
    this._getweatherService.getcityweather('seattle')
    .then(data => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.max_temp = data.main.temp_max;
      this.min_temp = data.main.temp_min;
      this.avg_temp = (this.max_temp + this.min_temp)/2;
      this.status = data.weather[0].description;
    })
    .catch(err=>{
      console.log('error bro');
    })
  }

}

