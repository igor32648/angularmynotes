import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  note = {
    id: "1",
    content: "Aprendendo Angular",
    authorship: "Dev",
    model: ""
}
createNote() {

}
cancel(){
  
}

}
