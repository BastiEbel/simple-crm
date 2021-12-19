import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterLoginComponent } from '../register-login/register-login.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  loading = false;
  hide = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(RegisterLoginComponent);
  }
}
