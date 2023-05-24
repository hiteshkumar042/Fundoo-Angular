import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  //password Visibility: hide & show
  hide = true;
  //error at input fields in red color
  firstNameError = '';
  lastNameError = '';
  emailError = '';
  passError = '';
  confirmPassError = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
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
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.firstNameError = 'Invalid first name';
      this.lastNameError = ' Invalid last name';
      this.emailError = 'invalid email address';
      this.passError = ' Invalid password';
      this.confirmPassError = ' Invalid confirm password';
      return;
    }
  }
}
