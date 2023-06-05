import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() noteDataInIcon:any;
  
  OnClickTrash(){
      console.log(this.noteDataInIcon.id)
      console.log('event triggered from icon component and onclick fn from icons compo')
  }
}
