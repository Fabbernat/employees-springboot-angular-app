import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  emptyRow: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'position'];
  errorMessage: string = '';


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      this.addEmptyRow();
    }, (error) => {
      console.error('Error fetching employee data', error);
    });
  }

  addEmptyRow(): void {
    // Clone employees array and add an empty row
    this.emptyRow = [...this.employees, { name: '', email: '' }];
  }
}
