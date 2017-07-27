import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Note } from './note'
import  { BehaviorSubject } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteserviceService {

  observedNotes = new BehaviorSubject(null);

  constructor(private _http: Http) { }

  createNote(note:Note): Promise<Note>{
    console.log('im in the note sevice', note);
    return this._http.post('/api/notes', note)
    .map(data => data.json())
    .toPromise();
  }
  
  getAllNotes(): Promise<Note[]>{
    console.log('In the notes service fetching all notes')
    return this._http.get('/api/notes')
    .map(data => data.json())
    .toPromise();
  }

  updateNotesArray(note: Note){
    this.observedNotes.next(note);
  }
}
