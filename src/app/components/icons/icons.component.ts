import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  isTrash: boolean = false;
  isArchived: boolean = false;
  constructor(private noteService: NoteService) { }

  //On Load of icon comp  
  ngOnInit() {
    if (this.noteDataInIcon?.isDeleted === true) {
      this.isTrash = true;
    }
    if (this.noteDataInIcon?.isArchived === true) {
      this.isArchived = true
    }
  }

  @Input() noteDataInIcon: any;
  createNoteColor:string=""
  @Output() refreshPageEvent = new EventEmitter<any>();
  @Output() backgroundColorEvent = new EventEmitter<any>();
  reqBody: any = '';



  //On Click of delete icon
  OnClickTrash() {
    this.reqBody = {
      noteIdList: [this.noteDataInIcon.id],
      isDeleted: true,
    };
    this.noteService.trashNoteService(this.reqBody).subscribe((data) => {
      this.refreshPageEvent.emit();
      console.log(data);
    });
  }

  //On Click of Archive icon
  OnClickArchive() {
    this.reqBody = {
      noteIdList: [this.noteDataInIcon.id],
      isArchived: true,
    };
    this.noteService.archiveNoteService(this.reqBody).subscribe((data) => {
      this.refreshPageEvent.emit();
      console.log(data);
    });
  }

  //OnClick Unarchive

  OnClickUnArchive() {
    this.reqBody = {
      noteIdList: [this.noteDataInIcon.id],
      isArchived: false,
    };
    this.noteService.archiveNoteService(this.reqBody).subscribe((data) => {
      this.refreshPageEvent.emit();

    });
  }


  //on Click on delete forever button
  onClickDeleteForever() {
    let reqBody = {
      noteIdList: [this.noteDataInIcon.id],
    };
    this.noteService.deleteForeverService(reqBody).subscribe(data => {
      this.refreshPageEvent.emit();
    })
  }

  onClickRestoreNote() {
    let reqdata = {
      noteIdList: [this.noteDataInIcon.id],
      isDeleted: false,
    }
    this.noteService.restoreNoteService(reqdata).subscribe((data) => {
      this.refreshPageEvent.emit();
    })

  }


  //on click of color change 
  onClickNoteColor(bgColor: string) {
   this.createNoteColor = bgColor
   this.backgroundColorEvent.emit(this.createNoteColor);
   
    if(this.noteDataInIcon!=null){
      let reqBody = {
        noteIdList: [this.noteDataInIcon.id],
        color: bgColor,
      }
      this.noteService.changeBackgroundColorService(reqBody).subscribe(res => {
        this.refreshPageEvent.emit()
      })
    }
    
  }
}
