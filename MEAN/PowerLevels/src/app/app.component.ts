import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  powerlevel = 0;

  ngOnInit(){
    this.powerlevel = 10;
  }

  onchange(event):void{
    event.preventDefault();
    console.log(`Received a power level of ${this.powerlevel}`);
  }
}