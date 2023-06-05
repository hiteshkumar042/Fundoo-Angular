import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/noteservices/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  
  constructor(private noteService : NoteService){}
  
  ngOnInit(): void {
    this.archiveNotes()
  }
  archiveNotesList:[]=[];

  archiveNotes(){
    this.noteService.getArchivedNotesService().subscribe((notes:any)=>{
      this.archiveNotesList=notes.data.data;
      console.log(this.archiveNotesList)
    })
  }

}
