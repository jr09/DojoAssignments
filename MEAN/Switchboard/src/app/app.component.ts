import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Switchboard';
  switch_array: boolean[] = [true, true, true, true, true, true, true, true, true, true];

  change_switch(id:number){
    if(id >=0 && id < this.switch_array.length){
      this.switch_array[id] = !this.switch_array[id];
    }
  }
}
