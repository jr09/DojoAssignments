import { Component, OnInit } from '@angular/core';
import { Bike } from '../../bike';
import { User } from '../../user';
import { UserserviceService } from '../../userservice.service';
import { BikeserviceService } from '../../bikeservice.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  bikeList: Array<Bike> = [];
  currUserId = "";

  constructor(private _bikeservice: BikeserviceService, private _cookieservice: CookieService) { }

  ngOnInit() {
    this.currUserId = this._cookieservice.get("userID");
    console.log(this.currUserId);
    this._bikeservice.getBikes()
    .then(bikes => this.bikeList = bikes);
  }

}
