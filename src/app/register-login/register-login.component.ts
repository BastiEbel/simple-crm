import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {
  loading= false;

  constructor(public dialogRef: MatDialogRef<RegisterLoginComponent>) { }

  ngOnInit(): void {
  }

}
