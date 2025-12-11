import { Component, signal, input, computed, output, inject } from '@angular/core';
import { TaskComponent } from './task/task';
import { Task, NewTask } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input<string | undefined>();
  selectedTasks = computed(() => this.tasksService.getUserTasks(this.id()));
  isAddingTask = signal<boolean>(false);
  private tasksService = inject(TasksService);

  onStartAddTask(userId: string) {
    this.isAddingTask.set(true);
  }

  onClose() {
    this.isAddingTask.set(false);
  }
}
