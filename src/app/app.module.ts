import { TaskServices } from './services/task.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { CheckedDirective } from './shared/checked.directive';
import { DataDirective } from './shared/data.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortPipe } from './shared/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DataDirective,
    TransformTaskPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TaskServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
