import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordComponent } from './forgetpassword.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgetpasswordComponent', () => {
  let component: ForgetpasswordComponent;
  let fixture: ComponentFixture<ForgetpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpasswordComponent],
      providers:[HttpClient],
      imports:[HttpClientModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(ForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
