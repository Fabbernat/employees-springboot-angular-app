import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// @ts-ignore
import {Employee} from './model/employee';

export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  // Add other relevant fields
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee/all"; // rename to apiUrl?

  constructor(private httpClient: HttpClient) {
  }

  public findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + `/employee/${id}`);
  }

  public createNew(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl + "/employee", employee);
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }


}
