import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservices/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: string="";
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router : Router
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
        .subscribe((res:any) => {
          console.log(res);
          //token storing in variable
          this.token = res.id
          //strong token in local storage
          localStorage.setItem('token',this.token)
          //After successful login redirect to dashboard
          this.router.navigateByUrl('/dashboard/notes');
          //for prompting a snackbar
          this.snackBar.open('Log in Success !!!', '', {
            duration: 4000,
          });
        });
    }
  }
}
