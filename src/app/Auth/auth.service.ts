import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm3WcjNhrOXPr9jsD_xUeh7s50F5dEYXc',
        {
          email: email,
          password: password,
          secureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCm3WcjNhrOXPr9jsD_xUeh7s50F5dEYXc',
        {
          email: email,
          password: password,
          secureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }



private handleError(errorRes: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';

  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMessage);
  }

  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email already exists.';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'Email not found or user may have been deleted.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'Invalid password or user does not have a password.';
      break;
    
  }

  return throwError(errorMessage);
}
}
