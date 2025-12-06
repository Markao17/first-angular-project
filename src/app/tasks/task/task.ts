import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  completeTask = output<string>();

  onCompletedTask() {
    this.completeTask.emit(this.task().id);
  }
}
