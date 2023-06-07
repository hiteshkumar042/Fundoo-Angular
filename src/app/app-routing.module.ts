import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import {authGuard} from '../app/auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget-password/reset-password', component: ResetpasswordComponent },
  { path: 'forget-password', component: ForgetpasswordComponent },
  { path: 'dashboard', redirectTo: 'dashboard/notes',pathMatch:'full'},
  
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate:[authGuard],
    children: [
      { path: 'notes', component: GetallnotesComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
