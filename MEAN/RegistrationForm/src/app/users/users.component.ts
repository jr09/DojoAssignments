import { Component} from '@angular/core';
import { User } from '../user'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users: User[] = [];

  contructor(){
  }

  user: User = new User();

  formSubmit(event){
    event.preventDefault();
    console.log(this.user);
  }
}
