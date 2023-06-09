import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../../services/noteservices/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss'],
})
export class UpdatenoteComponent implements OnInit {
  noteId: any = ' ';
  title: string = ' ';
  description: string = ' ';
  color:string = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>
  ) {}

  ngOnInit(): void {
    this.noteId = this.data.id;
    this.title = this.data.title;
    this.description = this.data.description;
    this.color = this.data.color;
  }

  //OnClick of close button
  closeButton() {
    let reqData = {
      noteId: this.noteId,
      title: this.title,
      description: this.description,
      color:this.color
    };
    //if title or desc chnaged then only it will hit update api
    if(this.title!=this.data.title || this.description!=this.data.description){
      this.noteService.UpdateNoteService(reqData).subscribe((note) => {
        console.log(note);
        this.dialogRef.close();
      });
    }
    else{
      this.dialogRef.close();
    }
    
  }
  //Chnage Color in Update Note
  setBackGround($event:any){
    this.color = $event
  }

}
