import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';

const firebaseConfig = {
  apiKey: "AIzaSyAa9T7u7wd02FxJOzL9b3FV4na_biJ5HpI",
  authDomain: "ng5auth-7f012.firebaseapp.com",
  databaseURL: "https://ng5auth-7f012.firebaseio.com",
  projectId: "ng5auth-7f012",
  storageBucket: "",
  messagingSenderId: "1008557901047"
  };


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,    
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
