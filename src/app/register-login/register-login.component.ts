import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Registry } from 'src/models/registry.class';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  registry = new Registry();
  loading = false;
  hide = true;
  hide1 = true;

  constructor(public dialogRef: MatDialogRef<RegisterLoginComponent>, private firestore: AngularFirestore, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  registerUser() {

    this.loading = true;
    this.firestore
      .collection('registrys')
      .add(this.registry.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('register user finished', result);
        this.dialogRef.close();
      });
  }
}
