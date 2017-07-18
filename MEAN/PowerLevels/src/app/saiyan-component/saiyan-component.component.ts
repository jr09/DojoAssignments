import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan-component',
  templateUrl: './saiyan-component.component.html',
  styleUrls: ['./saiyan-component.component.css']
})
export class SaiyanComponentComponent implements OnInit, OnChanges {
  @Input() mypowerlevel;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges():void{
    this.mypowerlevel *= 10;
  }

}
