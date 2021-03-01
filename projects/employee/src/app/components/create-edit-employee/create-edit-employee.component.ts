import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../services/employee.service';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.scss'],
})
export class CreateEditEmployeeComponent implements OnInit {
  employee: Employee;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
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
    console.log(this.employee);
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      position: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }
}
