import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent  implements OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alerhost : PlaceholderDirective;

  private closeSub : Subscription

  constructor(private authService: AuthService, private router: Router , private componentFactoryResolver : ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe({
      next: (resData: AuthResponseData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      },
    });

    form.reset();
  }

  onHandleError(){
    this.error = null;
    
  }

  private showErrorAlert(message : string)
  {

    // const alertCmp = new AlertComponent(); by this you cant make the component angular will not allow this .
    const alertCmp = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostVewContainerRef = this.alerhost.viewContainerRef;
    hostVewContainerRef.clear()


   const componentRef = hostVewContainerRef.createComponent(alertCmp);

   componentRef.instance.message = message;
  this.closeSub = componentRef.instance.close.subscribe(()=>{
    this.closeSub.unsubscribe();
    hostVewContainerRef.clear()

   })

  }

  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
}

