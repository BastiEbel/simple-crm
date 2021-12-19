import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Registry } from 'src/models/registry.class';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  registry = new Registry();
  loading = false;
  hide = true;
  hide1 = true;

  constructor(public dialogRef: MatDialogRef<RegisterLoginComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
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
