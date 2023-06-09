import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatenoteComponent } from './updatenote.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { IconsComponent } from '../icons/icons.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

describe('UpdatenoteComponent', () => {
  let component: UpdatenoteComponent;
  let fixture: ComponentFixture<UpdatenoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatenoteComponent,IconsComponent],
      imports:[HttpClientModule,MatCardModule,FormsModule,MatMenuModule],
      providers:[HttpClient,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    });
    fixture = TestBed.createComponent(UpdatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
