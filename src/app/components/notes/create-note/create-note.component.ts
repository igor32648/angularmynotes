import { Note } from './../note/note';
import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  note: Note = {
    content: '',
    authorship: '',
    model: ''
}

constructor(private service: NoteService,  private router: Router) {}

createNote() {
 this.service.create(this.note).subscribe(() => {
  this.router.navigate(['/listNotes'])
 })
}
cancel(){
  this.router.navigate(['/listNotes'])
}

}
