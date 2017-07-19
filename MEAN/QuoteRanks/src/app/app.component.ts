import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotesArray:any = [];

  getQuote(eventdata){
   this.quotesArray.push(eventdata);
   console.log('im here');
   console.log(this.quotesArray);
  }
}
