import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetEmailError=""
  forgetForm!:FormGroup

  constructor(private formBuilder:FormBuilder,
    private userService:UserService){}
  
  ngOnInit() {
    this.forgetForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  
  ClickForget(){
    if(this.forgetForm.invalid){
      this.forgetEmailError="Enter a valid email address"
      console.log("Invalid")
      return
    }
    else{
        console.log("Valid")
    }
  }
  
  

}
