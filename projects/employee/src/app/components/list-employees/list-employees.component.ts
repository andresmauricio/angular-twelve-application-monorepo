import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'position', 'phone', 'status'];
  dataSource;

  constructor(private employeeService: EmployeeService) {
    this.dataSource = employeeService.getListOfEmployees();
  }

  ngOnInit(): void {}
}
