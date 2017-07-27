import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { Http } from '@angular/http'
import { NoteserviceService } from '../noteservice.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  subscription: Subscription;

  notesArray: Array<Note> = [];

  constructor(private _http: Http, private _noteservice: NoteserviceService) {
    this.subscription = _noteservice.observedNotes.subscribe(
      (note) => {this.notesArray.unshift(note);},
      (err) => {},
      () => {}
    )
  }
  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this._noteservice.getAllNotes()
    .then(notes => {
      this.notesArray = notes;
      console.log(this.notesArray);
      this.notesArray.reverse();
    })
    .catch(error => console.log(error));
  }
}
