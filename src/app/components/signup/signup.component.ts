import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  signupObj: any = '';

  //password Visibility: hide & show
  hide = true;
  //error at input fields in red color
  firstNameError = '';
  lastNameError = '';
  emailError = '';
  passError = '';
  confirmPassError = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  //Click click of SignUp button
  SignUp() {
    if (this.signupForm.invalid) {
      this.firstNameError = 'Invalid first name';
      this.lastNameError = ' Invalid last name';
      this.emailError = 'invalid email address';
      this.passError = ' Invalid password';
      this.confirmPassError = ' Invalid confirm password';
      return;
    } else {
      this.signupObj = {
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        service: 'advance',
      };
      return this.userService.SignUpService(this.signupObj).subscribe((res) => {
        this.snackBar.open('User registered sucessfully', '', {
          duration: 4000,
        });
        
        console.log(res);
      });
    }
  }
}
