import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallnotesComponent } from './getallnotes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreatenoteComponent } from '../createnote/createnote.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchnotePipe } from 'src/app/pipe/searchnote.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('GetallnotesComponent', () => {
  let component: GetallnotesComponent;
  let fixture: ComponentFixture<GetallnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallnotesComponent,CreatenoteComponent,SearchnotePipe,DisplaynoteComponent],
      imports:[HttpClientModule,MatDialogModule,MatCardModule,MatIconModule],
      providers :[HttpClient]
    });
    fixture = TestBed.createComponent(GetallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
