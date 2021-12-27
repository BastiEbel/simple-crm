import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { Auth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './home/user/user.component';
import { DialogAddUserComponent } from './home/dialog-add-user/dialog-add-user.component';
import { UserDetailComponent } from './home/user-detail/user-detail.component';
import { DialogEditAddressComponent } from './home/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './home/dialog-edit-user/dialog-edit-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    LoginUserComponent,
    RegisterLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFirestoreModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
