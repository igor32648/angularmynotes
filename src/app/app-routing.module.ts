import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'listNotes',
      pathMatch: 'full'
  },
  {
      path: 'createNote',
      component: CreateNoteComponent 
  },
  {
      path: 'listNotes',
      component: ListNotesComponent
  },
  {
      path: 'notes/deleteNote/:id',
      component: DeleteNoteComponent
  },
  {
      path: 'notes/editNote/:id',
      component: EditNoteComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
