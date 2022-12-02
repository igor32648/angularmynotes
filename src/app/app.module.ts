import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './components/notes/note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateNoteComponent,
    ListNotesComponent,
    NoteComponent,
    DeleteNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
