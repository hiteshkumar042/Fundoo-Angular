import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/noteservices/note.service'

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  constructor(private noteService: NoteService){}
  noteObj:any=""
  ngOnInit(){
    this.getNotes()
  }


  getNotes(){
    this.noteService.getAllNotesService().subscribe((notes:any) =>{
      console.log(notes)
      this.noteObj = notes.data.data.reverse()
      this.noteObj = this.noteObj.filter((item:any) => 
        item.isDeleted===false && item.isArchived===false
      )
      console.log(this.noteObj)
    })
  }
}
