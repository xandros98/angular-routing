import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'

export const firebaseConfig = {
  apiKey: 'AIzaSyBbvHdleLvcpZRCfZsdqRAKZ56ZS0BtsYA',
  authDomain: 'angular-project-6b06d.firebaseapp.com',
  databaseURL: 'https://angular-project-6b06d.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '319739286027'
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MembersComponent,
    EmailComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

