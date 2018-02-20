import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }, en caso de que queramos obligar al login nada más entrar
    { path: '', component : HomepageComponent},
    { path: 'about', component : AboutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'email-login', component: EmailComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }