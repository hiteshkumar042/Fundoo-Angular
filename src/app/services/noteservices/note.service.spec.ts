import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
