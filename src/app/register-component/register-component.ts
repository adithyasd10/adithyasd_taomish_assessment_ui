import { Component } from '@angular/core';
import { LoginService } from '../services/login-service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

  user: User = {
    userid: 0,
    username: '',
    email: '',
    age: 0,
    password: ''
  }

  constructor(private service: LoginService, private router: Router) { }

  errorMessage: string = '';
  errorM: boolean = false;


  register(form: NgForm) {
    if (Number(this.user.age) <= 0) {
      form.controls['age']?.setErrors({ min: true });
      form.controls['age']?.markAsTouched();
      console.log("Age must be greater than 0");
      return;
    }

    if (form.invalid) {
      console.log("form is invalid");
      return;
    }

    return this.service.register(this.user)
      .subscribe({
        next: (resp) => {
          if (resp === null) {
            this.errorM = true;
            this.errorMessage = 'User already present';
            console.log("email already present");
          }
          else {
            console.log("User logged in successfully");
          }
        },

        error: (err) => { console.log("Error Registering in") }
      })
  }

  goToLogin() {
    this.router.navigate(["/"])
  }
}
