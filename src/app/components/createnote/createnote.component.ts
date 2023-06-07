import { Component, EventEmitter, Output } from '@angular/core';
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
  backgroundColor =""
  @Output() createnoteRefreshEvent = new EventEmitter<Object>();

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
        color:this.backgroundColor
      };
      //create note api service
      this.noteService.CreateNoteService(reqdata).subscribe((obs:any) => {
        console.log(obs);
        this.takeNoteTwoCall();
        this.createnoteRefreshEvent.emit();
      });
    }
    //If title and description are not specified(empty)
    else {
      this.takeNoteTwoCall();
    }
  }

  setBackgroundColor($event:any){
    this.backgroundColor=$event
  }
}
