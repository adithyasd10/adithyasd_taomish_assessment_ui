import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FormsService } from '../services/forms-service';
import { HttpClient } from '@angular/common/http';
import { Forms } from '../Model/forms';
import { CustomPipPipe } from '../custom-pip-pipe';

@Component({
  selector: 'app-forms-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './forms-component.html',
  styleUrl: './forms-component.css',
})
export class FormsComponent {

  vivekMessage: string = "vivek";

  forms: Forms = {
    fid: 0,
    fname: '',
    fphone: 0,
    femail: '',
  };

  constructor(private service: FormsService) { }

  submitForm(form: NgForm) {
    if (form.invalid) {
      console.log("form unsuccessfull");
      return;
    }

    return this.service.submitForm(this.forms)
      .subscribe({
        next: (resp) => { console.log("Data send successfully", resp) },
        error: (err) => { console.log("Data not send ", err) }
      })
  }

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
