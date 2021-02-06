import { Task } from './../model/task';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((a, b) => {
      if (a.name.toLowerCase > b.name.toLowerCase) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
