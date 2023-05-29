import { Component } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  takeNoteCondition = true;
  takeNoteTwoCall(){
    this.takeNoteCondition=!this.takeNoteCondition;
  }
}
