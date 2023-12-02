import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegistrationComponent } from './pages/authentication/registration/registration.component';
import { NewsComponent } from './pages/news/news.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { AuthInterceptor } from './pages/authentication/auth.interceptop'; 
import {MatDialogModule} from '@angular/material/dialog';
import { NewsSalvateComponent } from './components/news-salvate/news-salvate.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    NewsComponent,
    NavBarComponent,
    NewsCardComponent,
    NewsSalvateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [   
     {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
     } 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
