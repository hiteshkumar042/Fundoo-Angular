import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from '../../services/dataservice/data.service';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss'],
})
export class DisplaynoteComponent implements OnInit {
  //search text from dashboard search bar
  searchQuery: string = '';

  @Output() updateNoteEvent = new EventEmitter<Object>();
  ngOnInit() {
    this.getSearchedText();
  }

  //individual hover of selected take note three
  hoveredIndex: number | null = null;
  //take data from get all notes component (parent to child)
  @Input() noteThreeData: any = '';
  constructor(private dialog: MatDialog, private dataService: DataService) {}
  //Sending noteObj data to Dialog
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdatenoteComponent, { data: note });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateNoteEvent.emit();
    });
  }

  refreshDisplayData() {
    this.updateNoteEvent.emit();
  }

  getSearchedText() {
    this.dataService.currentData.subscribe((data) => {
      if (data != 'default') {
        this.searchQuery = data.toLocaleLowerCase();
      }
    });
  }
}
