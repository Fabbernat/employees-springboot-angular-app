package com.frontendart.demo.repository;

import com.frontendart.demo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

public ArrayList<Employee> findAllEmployees();

}
