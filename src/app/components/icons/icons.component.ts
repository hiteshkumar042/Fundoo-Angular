import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NoteService} from '../../services/noteservices/note.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  constructor(private noteService:NoteService){}
  @Input() noteDataInIcon:any;
  @Output() refreshPageEvent = new EventEmitter<any>();
  reqBody:any = ""

//On Click of delete icon
  OnClickTrash(){
      this.reqBody = {
        "noteIdList": [this.noteDataInIcon.id],
        "isDeleted": true
      }
      this.noteService.trashNoteService(this.reqBody).subscribe(data =>{
        this.refreshPageEvent.emit()
        console.log(data)
      })
  }

  //On Click of Archive icon
  OnClickArchive(){
    this.reqBody = {
      "noteIdList": [this.noteDataInIcon.id],
      "isArchived": true
    }
    this.noteService.archiveNoteService(this.reqBody).subscribe(data =>{
      this.refreshPageEvent.emit()
      console.log(data)
    })
}
}
