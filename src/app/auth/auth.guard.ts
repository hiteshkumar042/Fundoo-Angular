import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {TokenService} from '../services/tokenservice/token.service'

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  
  constructor(private tokenService:TokenService,private router:Router){}
  
  
  canActivate():boolean{
    let token:any = this.tokenService.getToken();
    console.log(token)
    if(!token){
      this.router.navigateByUrl('/login')
    }
    return true
  }
};
