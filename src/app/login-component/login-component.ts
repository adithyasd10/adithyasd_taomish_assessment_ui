import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../Model/User';
import { LoginService } from '../services/login-service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginUser } from '../Model/LoginUser';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  errorMessage: string = '';

  loginuser: LoginUser = {
    userid: 0,
    username: '',
    password: ''
  };

  constructor(private service: LoginService, private router: Router) { }

  submit(form: NgForm) {

    this.errorMessage = '';

    if (form.invalid) {
      console.log("form is invalid");
      return;
    }

    return this.service.login(this.loginuser)
      .subscribe({
        next: (resp) => {
          console.log("User logged in successfully");
          this.router.navigate(["/forms"]);

        },
        error: (err) => {
          if (err.status === 404) {
            this.errorMessage = 'User not found';
          } else {
            this.errorMessage = 'Login failed'
            console.log("Error while logging in ");
          }
        }
      });
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }

}
