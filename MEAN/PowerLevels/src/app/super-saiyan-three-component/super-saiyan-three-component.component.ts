import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three-component',
  templateUrl: './super-saiyan-three-component.component.html',
  styleUrls: ['./super-saiyan-three-component.component.css']
})
export class SuperSaiyanThreeComponentComponent implements OnInit, OnChanges {
  @Input() mypowerlevel;
  constructor() {}

  ngOnInit() {
  }
  ngOnChanges(){
    this.mypowerlevel *= 250;
  }

}
