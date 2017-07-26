import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { NoteserviceService } from '../noteservice.service'

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {

  newNote: Note = new Note();

  constructor(private _noteservive: NoteserviceService) { }

  ngOnInit() {
  }

  submitForm(event): void{
    event.preventDefault();
    this.newNote.date = "Jan 1,2017,6:11pm"
    console.log('im in the submitform', this.newNote);
    this._noteservive.createNote(this.newNote)
    .then(note => console.log('sent to the service'))
    .then(() => this.newNote = new Note())
    .catch(console.log);
    }
}
