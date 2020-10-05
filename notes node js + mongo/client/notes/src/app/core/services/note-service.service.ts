import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(environment.noteApi);
  }

  addNote(Note: Note) {
    return this.http.post(environment.noteApi, Note)
  }

  editNote(newParams,id) {
    return this.http.put(`${environment.noteApi}/${id}`, newParams)
  }

  deleteNote(id:number) {

    return this.http.delete(`${environment.noteApi}/${id}` ,)
  }

}
