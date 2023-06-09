import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponent } from './trash.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchnotePipe } from 'src/app/pipe/searchnote.pipe';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashComponent,DisplaynoteComponent,SearchnotePipe],
      imports:[HttpClientModule,MatDialogModule],
      providers: [HttpClient]
    });
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
