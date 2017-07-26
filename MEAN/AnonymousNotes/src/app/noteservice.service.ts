import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Note } from './note'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteserviceService {

  constructor(private _http: Http) { }

  createNote(note:Note): Promise<Note>{
    console.log('im in the note sevice', note);
    return this._http.post('/api/notes', note)
    .map(data => data.json())
    .toPromise()
  }
}
