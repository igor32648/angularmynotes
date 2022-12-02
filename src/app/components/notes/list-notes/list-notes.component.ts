import { NoteService } from './../note.service';
import { Component, Input } from '@angular/core';
import { Note } from '../note/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent {
  notesList: Note[] = [];

  constructor(private service: NoteService) {

  }

  ngOnInit(): void {
    this.service.list().subscribe((notesList) => {
      this.notesList = notesList
    })
  }
}
