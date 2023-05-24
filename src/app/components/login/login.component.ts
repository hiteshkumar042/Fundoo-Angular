import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  BaseURL = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  //error message
  emailLoginError = '';
  passLoginError = '';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //OnClick of login Button
  LogIn() {
    if (this.loginForm.invalid) {
      (this.emailLoginError = 'Invalid email'),
        (this.passLoginError = 'Invalid password');
      return;
    } else {
      return this.userService
        .LogInService(this.loginForm.value)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
