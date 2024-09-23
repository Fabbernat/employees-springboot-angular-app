import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  constructor(private employeeService: EmployeeService) { }

  createModel = new Employee('', '');
  createSubmitted = false;

  employeeId = 1;
  getModel = new Employee('', '');
  getSubmitted = false;
  nonExisting = false;

  onSubmitCreate() {
    this.employeeService.createNew(this.createModel).subscribe((response: Employee) => {
      this.createSubmitted = true;
      this.createModel = response;
    })
  }

  onSubmitGet() {
    this.employeeService.findById(this.employeeId).subscribe((response: Employee) => {
      if (response === null) {
        this.nonExisting = true;
      } else {
      this.getSubmitted = true;
      this.getModel = response;
      }
    });
  }
}
