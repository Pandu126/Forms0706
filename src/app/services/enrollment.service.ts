import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url='';
  constructor(private http:HttpClient, ) { }

  enroll(user:User) : Observable<any>{
   return this.http.post<any>(this.url,user)
  }
}
