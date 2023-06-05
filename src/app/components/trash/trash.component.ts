import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/noteservices/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  constructor(private noteService:NoteService){}

  
  ngOnInit(){
    this.trashNotes()
  }
  trashNotesList:[]=[]

  trashNotes(){
    this.noteService.getTrashNotesService().subscribe((notes:any) =>{
      this.trashNotesList= notes.data.data
      console.log(notes)
    })
  }
}
