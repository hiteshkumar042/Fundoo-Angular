import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf, NgFor} from '@angular/common';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { IconsComponent } from './components/icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    CreatenoteComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,
    MatButtonModule,MatCheckboxModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatSnackBarModule,MatSidenavModule,
    NgFor,NgIf,MatToolbarModule,MatButtonModule,MatIconModule,MatSidenavModule,MatListModule,MatGridListModule,MatRippleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
