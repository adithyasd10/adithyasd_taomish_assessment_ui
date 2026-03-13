import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';
import { FormsComponent } from './forms-component/forms-component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: "forms", component: FormsComponent }
];
