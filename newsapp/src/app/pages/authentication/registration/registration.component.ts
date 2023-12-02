import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { repeatPasswordValidator } from './repeat-password.validators';

interface RegistrationForm {
  email: FormControl<string>,
  password: FormControl<string>,
  repeatPassword: FormControl<string>
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isPasswordVisible: boolean = false;
  isRepeatPasswordVisible: boolean = false;

  registrationForm: FormGroup<RegistrationForm> = new FormGroup<RegistrationForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    repeatPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  }, {
    validators: [repeatPasswordValidator]
  })

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register({
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
    }).subscribe((response) => {
      this.router.navigate(['auth', 'login'])
    })
  }

}
