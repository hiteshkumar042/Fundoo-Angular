import { Component } from '@angular/core';
import { NoteService } from '../../services/noteservices/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent {
  takeNoteCondition = true;
  title = '';
  description = '';

  //switch between take note one and two
  takeNoteTwoCall() {
    this.takeNoteCondition = !this.takeNoteCondition;
  }

  constructor(private noteService: NoteService) {}

  //On Click of close button
  closeButton() {
    if (this.title || this.description != '') {
      let reqdata = {
        title: this.title,
        description: this.description,
      };
      //create note api service
      this.noteService.CreateNoteService(reqdata).subscribe((obs) => {
        console.log(obs);
        this.takeNoteTwoCall();
      });
    }
    //If title and description are not specified(empty)
    else {
      this.takeNoteTwoCall();
    }
  }
}
