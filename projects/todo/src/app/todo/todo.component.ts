import { Component, OnInit } from '@angular/core';
import { Todo } from './ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  task = '';
  listTask: Todo[] = [
    {
      id: 1,
      name: 'Crear una aplicación con Angular',
      status: false
    },
    {
      id: 2,
      name: 'Realizar los backups de la BD',
      status: true
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  saveTask() {
    const todo: Todo = {
      id: new Date().getTime(),
      name: this.task,
      status: false,
    };
    this.listTask.push(todo);
    this.task = '';
  }

  deleteTask(i: number) {
    this.listTask.splice(i, 1);
  }
}
