import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.scss'],
})
export class CreateEditEmployeeComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  send() {
    console.log(this.form.value);
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
