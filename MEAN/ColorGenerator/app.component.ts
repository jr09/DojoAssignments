import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Color Generator';
  colors = getColorArray();
}

function getcolor():string{

  var base_string = "0123456789ABCDEF";
  var result_string = '#';

  for(let idx = 0; idx < 6 ;idx++){
    result_string += base_string[Math.floor(Math.random()*16)];
  }
  return result_string;
}

function getColorArray():string[]{
  var colors: string[] = [];
  for(let idx = 0; idx < 10; idx++){
    colors.push(getcolor());
  }
  return colors;
}