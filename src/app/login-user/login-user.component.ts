
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterLoginComponent } from '../register-login/register-login.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  signInForm: FormGroup;
  loading = false;
  hide = true;
  isSignedIn = false;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<LoginUserComponent>, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignOut(){
    this.dialog.open(RegisterLoginComponent);
  }

  async onSignIn(): Promise<void>{
    this.loading = true;
    if(this.signInForm.valid){
      //try{
        const credentials = await this.authService.signUp(this.signInForm.value);
        this.dialogRef.close(credentials);
        this.loading = false;
        this.router.navigateByUrl('/dashboard');
      /* } catch(error: any){
        if(error.code === `authService/wrong-password`) this.msg.show('Wrong Passord! Try Again.');
        else if(error.code === 'authService/user-not-found') this.msg.show('User not found');
      } */
    }

  }
}
