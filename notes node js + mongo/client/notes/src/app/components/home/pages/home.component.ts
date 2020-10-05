import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/core/models/note';
import { NoteService } from 'src/app/core/services/note-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes: Note[] = [];
  noteEditFormGroup: FormGroup;
  note:Note;
  noteValues:Note;
  

  constructor(private formBuilder: FormBuilder,private NoteService:NoteService) { }

  sendValuesToEditForm(obj:Note){
    this.noteValues = obj;
    console.log( this.noteValues.id);
    
    this.noteEditFormGroup = this.formBuilder.group({
      title: [obj.title, Validators.required],
      body: [obj.body, Validators.required],
      time: [obj.time, Validators.required],
      date: [obj.date, Validators.required],

    });
  
  }

  getNotesArrFromChild($event: Note[]) {
    this.notes = $event;
    this.notes.sort(function(a, b) { 
      return a.id - b.id;
    });
  }

  deleteNote(id:number){
  this.NoteService.deleteNote(id).subscribe(ele => {
   this.notes = this.notes.filter(n => n.id != id);
   this.notes.sort(function(a, b) { 
    return a.id - b.id;
  });
})
  }

  editForm(f){
    this.note = {
      id:this.noteValues.id,
      title: f.form.value.title,
      body: f.form.value.body,
      time: f.form.value.time,
      date: f.form.value.date
    }
    this.NoteService.editNote(this.note,this.noteValues.id).subscribe(data => {
      this.notes = [];
      this.NoteService.getAll().subscribe(data => {
        this.notes = data;
        this.notes.sort(function(a, b) { 
          return a.id - b.id;
        });
      } )
    })
  }

 
  ngOnInit(): void {
    this.noteEditFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],

    });
  }

}
