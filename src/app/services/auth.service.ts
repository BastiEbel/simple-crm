import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _auth: AngularFireAuth) { }

  signIn(value: any){
    return this._auth.signInWithEmailAndPassword(value.email, value.password);
  }

  signUp(value: any){
    return this._auth.createUserWithEmailAndPassword(value.email, value.password);
  }
  /* 
  logout(){
    this._auth.signOut();
    localStorage.removeItem('user');
  } */
}
