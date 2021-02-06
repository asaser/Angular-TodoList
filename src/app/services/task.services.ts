import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../model/task";

@Injectable()
export class TaskServices {

  // lista zadań
  // private tasksList: Array<Task> = [];
  // private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  // private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksList = [
      {name: 'TEST TASK', isDone: false},
      // {name: 'hahaha', isDone: false}
      // {name: 'Gotowanie', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Odkurzanie', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Zakupy', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Wykonane zadanie', created: new Date().toLocaleString(), end: new Date().toLocaleTimeString(), isDone: true}
    ];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    // this.tasksList.push(task);
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
   const list = this.tasksListObs.getValue().filter( e => e !== task);
   this.tasksListObs.next(list);
  }

  done(task: Task) {
    // task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    // this.tasksDone.push(task);
    // this.remove(task);
    // this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  // getDoneTasksDoneObs(): Observable<Array<Task>> {
  //   return this.tasksDoneObs.asObservable();
  // }
}
