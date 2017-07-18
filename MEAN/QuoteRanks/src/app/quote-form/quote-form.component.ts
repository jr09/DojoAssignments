import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent{
  @Output() ataskeventemitter = new EventEmitter();
  quotes:Quote[] = [];

  quote1:Quote = new Quote();

  formSubmit(event){
    // event.preventDefault();
    this.quote1.upvotes = 0;
    this.quote1.id = Math.floor(Math.random()*1000);
    this.quotes.push(this.quote1);
    console.log(this.quotes);
    this.quote1 = new Quote();
    this.triggerparent();
  }

  triggerparent(){
    // console.log('Im here2');
    // console.log(this.quotes);  
    this.ataskeventemitter.emit(this.quotes);
  }
}
