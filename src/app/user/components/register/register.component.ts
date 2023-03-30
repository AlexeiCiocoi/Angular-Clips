import { EmailTaken } from './../../validators/email-taken';
import { RegisterValidators } from './../../validators/register-validators';
import IUserRegister from 'src/app/models/user.model';
import { AuthService } from './../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private auth: AuthService ,private emailTaken: EmailTaken) {}

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email],[this.emailTaken.validate]);
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl();
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
  ]);

  showAlert: boolean = false;
  alertMessage: string = '';
  alertColor: string = 'blue';

  registerForm = new FormGroup(
    {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      confirm_password: this.confirm_password,
      phoneNumber: this.phoneNumber,
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  async register() {
    this.showAlert = true;
    this.alertMessage = 'Registering new user';
    this.alertColor = 'blue';
    try {
      await this.auth.createUser(this.registerForm.value as IUserRegister);
    } catch (e) {
      console.error(e);
      this.alertMessage = 'something went wrong';
      this.alertColor = 'red';
      return;
    }

    this.alertMessage = 'Success your account has been created';
    this.alertColor = 'green';
  }
}
