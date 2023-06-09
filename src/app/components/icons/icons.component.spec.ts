import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsComponent } from './icons.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsComponent],
      imports :[HttpClientModule,MatMenuModule],
      providers:[HttpClient]
    });
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
