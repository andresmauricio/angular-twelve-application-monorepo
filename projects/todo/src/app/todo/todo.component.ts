import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  task = '';
  listTask: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  saveTask() {
    this.listTask.push(this.task);
    console.log(this.listTask);
    this.task = '';
  }
}
