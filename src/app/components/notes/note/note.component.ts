import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note = {
    id: 9,
    content: 'I love Angular',
    authorship: 'Nay',
    model: 'model3',
  };

  noteWidth(): string {
    if(this.note.content.length >= 256) {
      return 'note-g';
    } else return 'note-p';
  }
}
