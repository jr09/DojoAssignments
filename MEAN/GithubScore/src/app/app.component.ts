import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:any = [];
  object = {name:""}
  error = {code:false, msg:""}
  score = 0;
  analyzed = 0;

  constructor(private _httpService: HttpService){}

  getTasks(){
    this._httpService.retreiveTasks(this.object.name)
    .then(tasks => {
      this.tasks = tasks;
      this.score = this.tasks.followers + this.tasks.public_repos;
    })
    .catch(err => {
      this.error.code=true;
      this.error.msg=err.statusText;
    })
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.object.name);
    this.resetObjects();
    this.getTasks();
  }

  resetObjects() {
    this.score = 0;
    this.error = {code: false, msg:""};
  }
}
