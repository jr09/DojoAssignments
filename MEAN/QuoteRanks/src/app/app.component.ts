import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes_child = [];

  triggeredbychild(eventdata){
   this.quotes_child = eventdata;
  }

  quote_option(mode, id){
    console.log(mode, id);
  }
}
