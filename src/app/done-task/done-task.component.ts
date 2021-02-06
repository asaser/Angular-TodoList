import { Task } from './../model/task';
import { TaskServices } from './../services/task.services';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  // @Input()
  tasksDone: Array<Task> = [];

  constructor(private tasksServices: TaskServices) {
    this.tasksServices.getTasksListObs().subscribe(
      (tasks: Array<Task>) => {
        this.tasksDone = tasks.filter (t => t.isDone === true);
      });
    }

  ngOnInit(): void {
  }

  removeDoneTask(task: Task) {
    // this.emitRemote.emit(task);
    this.tasksServices.remove(task);
  }

}
