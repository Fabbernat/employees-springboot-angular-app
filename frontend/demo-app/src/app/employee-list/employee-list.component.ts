import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        // this.employees = data;
        this.errorMessage = '';  // Clear any previous error message
      },
      error: (err) => {
        this.errorMessage = 'Could not load employee data. Please try again later.';
        console.error(err);
      }
    });
  }
}
