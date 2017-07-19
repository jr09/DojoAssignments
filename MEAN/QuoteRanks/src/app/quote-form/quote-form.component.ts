import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit{
  @Output() quoteEventEmitter = new EventEmitter();

  quote1 = new Quote();

  ngOnInit(){
  }

  formSubmit(event){
    // event.preventDefault();
    this.quote1.upvotes = 0;
    this.quote1.id = Math.floor(Math.random()*1000);
    this.sendQuoteToParent();
  }

  sendQuoteToParent(){ 
    this.quoteEventEmitter.emit(this.quote1);
    this.quote1 = new Quote();
  }

  voteUp() {
    console.log(`Received request to upvote`);
  }
}
