import { Task } from './../model/task';
import { TaskServices } from './../services/task.services';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask!: string;
  // @Output()
  // emitTask = new EventEmitter<string>();

  constructor(private tasksServices: TaskServices) { }

  ngOnInit(): void {
  }

  add() {
    // this.emitTask.emit(this.newTask);
    const task: Task = ({name: this.newTask, isDone: false});
    this.tasksServices.add(task);
    this.newTask = '';
  }

}
