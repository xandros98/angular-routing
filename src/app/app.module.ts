import { appRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component' 
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './_components/alert.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

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
    MembersComponent,
    EmailComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    AboutComponent,
    FormComponent,
    ContactComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
bootstrap: [AppComponent]
})

export class AppModule { }

