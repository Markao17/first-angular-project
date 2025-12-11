import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);

  onCompletedTask() {
    this.tasksService.removeTask(this.task().id);
  }

  formatDate(dateString: string): string {
    return dateString.replace(/-/g, '/');
  }
}
