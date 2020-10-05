import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NoteFormComponent } from './pages/note-form/note-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './pages/note/note.component';



@NgModule({
  declarations: [HomeComponent, NoteFormComponent, NoteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class HomeModule { }
