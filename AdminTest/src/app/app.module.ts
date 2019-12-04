import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { Routes } from '@angular/router';
// import ReactiveFormsModule for reactive form
import { ReactiveFormsModule } from '@angular/forms';

// import module for Routing.
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminService } from './services/admin.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'signup',
        component : SignupComponent
      },
      {
        path : 'profile/:adminId',
        component : ProfileComponent
      }
    ])

  ],
  providers: [
    AdminService
  ],
  bootstrap: [AppComponent]
})  export class AppModule { }
