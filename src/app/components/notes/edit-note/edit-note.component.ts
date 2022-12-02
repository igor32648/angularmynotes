import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  note: Note = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
  }

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  editNote() {
    this.service.edit(this.note).subscribe(() => {
      this.router.navigate(['/listNotes'])
    })

  }

  cancel() {
    this.router.navigate(['/listNotes'])
  }

}
