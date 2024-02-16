import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
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

    this.isLoading = true
    if (this.isLogInMode) {
    } 
    else {
      this.authservice.signUp(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;

        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage
          
        //   this.error= 'An error occured'
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
