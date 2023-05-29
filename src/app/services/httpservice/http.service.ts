import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl= "http://fundoonotes.incubation.bridgelabz.com/api/"
  constructor(private httpClient:HttpClient){ }
  
  //Post Services
  PostService(url:any,reqBody:any,httpHeadersOptions:any){
    //backend Hit
    return this.httpClient.post(this.BaseUrl+url,reqBody,httpHeadersOptions)
  }

  //Get Services
  GetService(){

  }
  //Put Services
  PutService(){

  }
  //Delete Services
  DeleteService(){

  }
}
