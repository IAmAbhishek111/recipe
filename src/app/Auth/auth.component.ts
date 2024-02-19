import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls :['./auth.component.css']
})
export class AuthComponent {
  isLogInMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authservice: AuthService) {}

  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLogInMode) {
     authObs= this.authservice.login(email, password)
    } else {
     authObs=  this.authservice.signUp(email, password)
    }


    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;

        
        this.isLoading = false;
      }
    );
    form.reset();
  }
}