import { Component } from "@angular/core";

@Component ({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
    isLogInMode = true;

    onSwitchMode()
    {
        this.isLogInMode = !this.isLogInMode;

    }
}