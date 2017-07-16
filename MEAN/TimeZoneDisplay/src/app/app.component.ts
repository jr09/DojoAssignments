import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date_obj:Date = null;
  lasttimezone: string = '';

  getdatetime(tz: string): Date{
    this.date_obj = new Date();

    if(tz == 'PST'){
      this.lasttimezone = 'PST';
      return this.date_obj;
    }
    else if(tz == 'MST'){
      this.lasttimezone = 'MST';
      this.date_obj.setHours(this.date_obj.getHours()+1);
      return this.date_obj;
    }
    else if(tz == 'CST'){
      this.lasttimezone = 'CST';
      this.date_obj.setHours(this.date_obj.getHours()+2);
      return this.date_obj;
    }
    else if(tz == 'EST'){
      this.lasttimezone = 'EST';
      this.date_obj.setHours(this.date_obj.getHours()+3);
      return this.date_obj;
    }
    else if(tz == 'Clearall'){
      this.lasttimezone = '';
      this.date_obj = null;
      return this.date_obj;
    }
  }
}
