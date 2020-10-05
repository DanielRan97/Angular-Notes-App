import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from 'src/app/core/models/note';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/core/services/note-service.service';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  note: Note;
  noteFormGroup: FormGroup;
  @Input() allNotes: Note[] = [];
  @Output() noteEvent = new EventEmitter<Note[]>();

  constructor(private formBuilder: FormBuilder, private NoteService: NoteService) { }

  sendNotesArrToParent() {
    this.noteEvent.emit(this.allNotes);
  
    
  }

  addNote(f) {
    let maxId: number = 0;
    this.allNotes.forEach(element => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    this.note = {
      id: maxId + 1,
      title: f.form.value.title,
      body: f.form.value.body,
      time: f.form.value.time,
      date: f.form.value.date,
    }
    this.NoteService.addNote(this.note).subscribe(ele => {

      this.allNotes.push(this.note);
  
    });

  }

  getNotes(){
    this.NoteService.getAll().subscribe(ele => {
      this.allNotes = ele;
      this.allNotes.sort(function(a, b) { 
        return a.id - b.id;
      });
      this.sendNotesArrToParent();
    })

  }

  ngOnInit(): void {
    this.noteFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      time: [''],
      date: [''],

    });
    this.getNotes();
   
 }



}
