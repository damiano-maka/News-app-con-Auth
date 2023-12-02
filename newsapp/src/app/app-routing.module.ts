import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RegistrationComponent } from './pages/authentication/registration/registration.component';
import { NewsComponent } from './pages/news/news.component';
import { authGuard } from './guards/auth.guard';
import { NewsSalvateComponent } from './components/news-salvate/news-salvate.component';

const routes: Routes = [
  { path: '',   redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', component:AuthenticationComponent, 
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    }]},
    { path: 'news',component: NewsComponent ,canActivate : [authGuard]},
    { path: 'notizie-salvate', component: NewsSalvateComponent,canActivate : [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
