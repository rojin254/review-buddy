import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']

})
export class LoginFormComponent {
  userId: string="";
  password: string="";

  login(loginForm: NgForm) {

    if (loginForm.invalid) {
      return;
    }
    console.log('User ID:', loginForm.value.userId);
    console.log('Password:', loginForm.value.password);
  }
}
