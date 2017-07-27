import { Component, OnInit} from '@angular/core';
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
    console.log('im in the submitform', this.newNote);
    this._noteservive.createNote(this.newNote)
    .then(note => {
      console.log('sent to the service');
      this._noteservive.updateNotesArray(note);
    })
    .then(() => this.newNote = new Note())
    .catch(console.log);
    }
}
