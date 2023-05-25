import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  LogInService(reqPayLoad:any){
    let httpHeadersOptions= {
      headers : new HttpHeaders({
        contentType : 'application/json'
      })
    }
    return this.httpService.PostService('user/login',reqPayLoad,httpHeadersOptions)
  } 


  SignUpService(reqPayLoad:any){
    let httpHeadersOptions= {
      headers : new HttpHeaders({
        contentType : 'application/json'
      })
    }
    return this.httpService.PostService('user/userSignUp',reqPayLoad,httpHeadersOptions)
  }

  ForgetPasswordService(reqPayLoad:any){
    let httpHeadersOptions= {
      headers : new HttpHeaders({
        contentType : 'application/json'
      })
    }
    return this.httpService.PostService('user/reset-password',reqPayLoad,httpHeadersOptions)
  }
}
