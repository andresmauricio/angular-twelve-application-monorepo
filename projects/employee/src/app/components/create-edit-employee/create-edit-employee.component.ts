import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.scss'],
})
export class CreateEditEmployeeComponent implements OnInit {
  employee: Employee;
  form: FormGroup;
  idEmployee: string | number;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private activedRouter: ActivatedRoute
  ) {
    this.idEmployee = this.activedRouter.snapshot.params.id;
    if (this.idEmployee) {
      const employee = this.employeeService.getEmployee(this.idEmployee);
      if (employee) this.employee = employee;
    }
    this.createForm();
  }

  ngOnInit(): void {}

  send() {
    this.employee = {
      id: new Date().getTime(),
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      position: this.form.get('position').value,
      status: true,
    };
    this.employeeService.createEmployee(this.employee);
  }

  createForm() {
    this.form = this.fb.group({
      name: [this.employee.name, Validators.required],
      email: [this.employee.email, [Validators.required, Validators.email]],
      position: [this.employee.position, Validators.required],
      phone: [this.employee.phone, Validators.required],
    });
  }
}
