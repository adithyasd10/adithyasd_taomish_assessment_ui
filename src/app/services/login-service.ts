import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { LoginUser } from '../Model/LoginUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}`)
  }

  login(user: LoginUser) {
    return this.http.post(`${this.url}/login`, user)
  }

  register(user: User) {
    return this.http.post(`${this.url}/register`, user)
  }
}
