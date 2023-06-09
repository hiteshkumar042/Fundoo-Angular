import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteComponent } from './createnote.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('CreatenoteComponent', () => {
  let component: CreatenoteComponent;
  let fixture: ComponentFixture<CreatenoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenoteComponent],
      imports:[HttpClientModule,MatCardModule,MatIconModule],
      providers: [HttpClient]
    });
    fixture = TestBed.createComponent(CreatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
