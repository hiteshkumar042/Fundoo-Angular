import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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
  GetService(url:any,httpHeadersOptions:any){
    return this.httpClient.get(this.BaseUrl+url,httpHeadersOptions)
  }
  //Put Services
  PutService(){

  }
  //Delete Services
  DeleteService(){

  }
}
