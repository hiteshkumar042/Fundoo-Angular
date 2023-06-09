import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchnotePipe } from 'src/app/pipe/searchnote.pipe';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveComponent,DisplaynoteComponent,SearchnotePipe],
      imports:[HttpClientModule,MatDialogModule],
      
      
    });
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
