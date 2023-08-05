import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  userId: string="";
  password: string="";
  confirmPassword: string="";

  register(registerForm:NgForm) {
    // Perform login logic here, e.g., send API request
    if(registerForm.invalid) {
      return;
    }
    console.log('User ID:', registerForm.value.userId);
    console.log('Password:', registerForm.value.password);
    console.log('Confirm Password:', registerForm.value.confirmPassword)
  }
}
