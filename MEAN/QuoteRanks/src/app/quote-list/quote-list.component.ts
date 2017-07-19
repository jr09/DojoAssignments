import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Output() quoteListEventEmitter = new EventEmitter();
  @Input() quotesArray;
  constructor() { }

  ngOnInit() {
  }
  upvote(quote) {
    quote.upvotes++;
  }
  downvote(quote){
    quote.upvotes--;
  }
  delete(quote){
    this.quoteListEventEmitter.emit(quote);
  }
}
