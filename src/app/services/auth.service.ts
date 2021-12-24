import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _auth: Auth) { }

  signIn(username: string, password: string){
   return from(signInWithEmailAndPassword(this._auth, username, password));
  }

  /* signUp(value: any){
    return this._auth.createUserWithEmailAndPassword(value.email, value.password);
  } */
  
  logout(){
    this._auth.signOut();
    localStorage.removeItem('user');
  }
}
