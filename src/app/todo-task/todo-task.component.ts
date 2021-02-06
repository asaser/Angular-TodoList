import { Task } from './../model/task';
import { TaskServices } from './../services/task.services';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoTaskComponent implements OnInit {

  // @Input()
  tasksList: Array<Task> = [];

  // @Output()
  // emitRemote = new EventEmitter<string>();

  // @Output()
  // emitDone = new EventEmitter<string>();


  constructor(private tasksServices: TaskServices) {
    this.tasksServices.getTasksListObs().subscribe((tasks: Array<Task>) => {
      // add slice to do not refresh all components but refresh list
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit(): void {
  }

  remove(task: Task) {
    // this.emitRemote.emit(task);
    this.tasksServices.remove(task);
  }

  done(task: Task) {
    // task.end = new Date().toLocaleString();
    this.tasksServices.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}
