import { Component } from '@angular/core';

interface Task {
  TaskTitle: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent {
  Title: string = 'Keep Note';
  add: string = 'New';
  newTask: string = '';
  todoTasks: Task[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoTasks.push({ TaskTitle: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(index: number) {
    this.todoTasks.splice(index, 1);
  }
}