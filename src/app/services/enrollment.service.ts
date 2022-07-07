import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  url = '';
  constructor(private http: HttpClient) {}

  enroll(user: User) {
    console.log(user);
    return this.http
      .post<any>(this.url, user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
