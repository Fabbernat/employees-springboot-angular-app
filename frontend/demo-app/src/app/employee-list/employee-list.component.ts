import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];  // may be replaced with any[]


  constructor() {
    this.employees = [];
  }

  ngOnInit(): void {
    this.employees = [
      {
        "name": "Chuck Norris",
        "email": "cnorris@company.com"
      },
      {
        "name": "Jackie Chan",
        "email": "jchan@company.com"
      },
      {
        "name": "Rocky Balboa",
        "email": "rbalboa@company.com"
      }
    ]
  }

  protected readonly Employee = Employee;
  employee: string | undefined;
}
