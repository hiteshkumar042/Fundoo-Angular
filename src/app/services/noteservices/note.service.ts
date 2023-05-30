import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token: any = localStorage.getItem('token');
  //HeaderOptions
  httpHeadersOption = {
    headers: new HttpHeaders({
      contentType: 'application/json',
      authorization: this.token,
    }),
  };

  constructor(private httpService: HttpService) {}

  //create Notes Service
  CreateNoteService(reqBody: any) {
    return this.httpService.PostService(
      'notes/addNotes',
      reqBody,
      this.httpHeadersOption
    );
  }

  //Get all notes service
  getAllNotesService() {
    return this.httpService.GetService(
      'notes/getNotesList',
      this.httpHeadersOption
    );
  }
}
