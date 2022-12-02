import { NoteService } from './../note.service';
import { Component } from '@angular/core';
import { Note } from '../note/note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css'],
})
export class DeleteNoteComponent {
  note: Note = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  };
  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  deleteNote() {
    if (this.note.id) {
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/listNotes']);
      });
    }
  }
  cancel() {
    this.router.navigate(['/listNotes']);
  }
}
