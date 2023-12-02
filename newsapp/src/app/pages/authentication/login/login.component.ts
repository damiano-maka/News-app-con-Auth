import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequestModel, AuthResponseModel } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service'; 

interface LoginForm {
  email: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPasswordVisible: boolean = false;

  loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators:[Validators.required]
    })
  })

  constructor(
    private authService: AuthService,
    private router: Router) {}


  onLogin(): void {
    this.authService
      .login(this.loginForm.value as AuthRequestModel)
      .subscribe((data: AuthResponseModel) => {
       localStorage.setItem('accessToken', data.accessToken);
       this.router.navigate(['news']); 
       this.authService.isLoggedIn$.next(true) 
       this.authService.nomeUtente = this.loginForm.value.email;
      })
  }
}
