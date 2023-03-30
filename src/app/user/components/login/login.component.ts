import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth) {}
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false
  alertMsg = 'Please wait , we are logging you in'
  alertColor = 'blue'
  inSubmission = false

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait , we are logging you in';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
      
    } catch (e) {
      this.alertMsg = 'Something went wrong , please try again';
      this.alertColor = 'red';
      this.inSubmission = false;
    }

     this.alertMsg = 'Success you are logging in ';
     this.alertColor = 'green';
  }
}
