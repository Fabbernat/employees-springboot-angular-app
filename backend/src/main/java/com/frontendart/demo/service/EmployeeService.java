package com.frontendart.demo.service;

import com.frontendart.demo.dto.EmployeeDto;
import com.frontendart.demo.entity.Employee;
import com.frontendart.demo.repository.EmployeeRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

  @Autowired
  EmployeeRepository employeeRepository;

  public Employee createEmployee(EmployeeDto employeeDto) {
    Employee employee = new Employee();
    employee.setName(employeeDto.getName());
    employee.setEmail(employeeDto.getEmail());
    return employeeRepository.save(employee);
  }
  public Optional<Employee> findById(Long id) {
      return employeeRepository.findById(id);
  }
}
