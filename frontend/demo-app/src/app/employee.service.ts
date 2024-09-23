import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + `/employee/${id}`);
  }

  public createNew(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl + "/employee", employee);
  }
}
