import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  
  messgaeSource = new BehaviorSubject("default");
  currentData = this.messgaeSource.asObservable();

  newData(text: string){
    this.messgaeSource.next(text)
  }
}
