import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';

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
