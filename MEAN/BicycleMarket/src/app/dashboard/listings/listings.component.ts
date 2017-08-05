import { Component, OnInit } from '@angular/core';
import { Bike } from '../../bike';
import { User } from '../../user';
import { UserserviceService } from '../../userservice.service';
import { BikeserviceService } from '../../bikeservice.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  newBike = new Bike();
  currUserId = "";
  userListings: User;
  userListingBikes: Array<Bike>=[];

  constructor(private _userservice: UserserviceService, private _bikeservice: BikeserviceService, private _cookieservice: CookieService) { }

  ngOnInit() {
    this.currUserId = this._cookieservice.get("userID");
    this.getUserListings();
  }

  newBikeSubmit(event){
    event.preventDefault();
    this._userservice.userIndex(this.currUserId)
      .then(user => this.newBike.user = user)
      .then(() => this._bikeservice.createBike(this.currUserId, this.newBike))
      .then(bike => console.log("Successfully created new bike", bike))
      .then(() => this.newBike = new Bike())
      .catch(error => console.log(error));
  }

  getUserListings(){
    this._userservice.getUserBikes(this.currUserId)
    .then(user => this.userListings = user)
    .then(() => this.userListingBikes = this.userListings.bikes)
  }

  updateListing(bike: Bike){
    console.log(`Received request to update ${bike._id}`);
    this._bikeservice.updateBike(bike)
    .then(bike => console.log(`Updated ${bike}`))
    .then(() => this.getUserListings());
  }

  deleteListing(bike: Bike){
    console.log(`Received request to delete ${bike._id}`);
    this._bikeservice.removeBike(bike._id)
    .then(bike => console.log(`Removed ${bike}`))
    .then(() => this.getUserListings());
  }

}
