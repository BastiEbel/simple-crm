import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './home/user/user.component';
import { UserDetailComponent } from './home/user-detail/user-detail.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/dashboard', component: DashboardComponent },
  { path: 'home/user', component: UserComponent },
  { path: 'home/user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
