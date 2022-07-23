import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IEmployee } from '../employee';


export interface IEmployee {
  id: number;
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = 'assets/data/employeeData.json';

  constructor(private http: HttpClient) {}

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl);
  }
}
