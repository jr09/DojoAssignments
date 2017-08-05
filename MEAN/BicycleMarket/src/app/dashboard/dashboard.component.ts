import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currUser: User;
  currUserId: string;

  constructor(private _userservice: UserserviceService, private _router: Router, private _cookieservice: CookieService) { }

  ngOnInit() {
    this.currUserId = this._cookieservice.get('userID');
    console.log(this.currUserId, typeof(this.currUserId));
  }

  logout(){
    this._userservice.userIndex(this.currUserId)
      .then(user => this.currUser = user)
      .then(() => this._userservice.userLogout(this.currUser))
      .then(() => this._router.navigate([""]))
  }

}
