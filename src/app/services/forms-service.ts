import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Forms } from '../Model/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getForms() {
    return this.http.get(`${this.url}/forms`)
  }

  submitForm(forms: Forms) {
    return this.http.post(`${this.url}/addforms`, forms)
  }

}
