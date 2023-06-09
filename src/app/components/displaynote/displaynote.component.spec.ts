import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynoteComponent } from './displaynote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchnotePipe } from 'src/app/pipe/searchnote.pipe';

describe('DisplaynoteComponent', () => {
  let component: DisplaynoteComponent;
  let fixture: ComponentFixture<DisplaynoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaynoteComponent,SearchnotePipe],
      imports:[MatDialogModule]
    });
    fixture = TestBed.createComponent(DisplaynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
