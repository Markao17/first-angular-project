import { Component,signal, input, computed, output } from '@angular/core';
import { TaskComponent } from './task/task';
import { Task } from './task/task.model';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input<string | undefined>();

  tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      name: 'Master Angular',
      summary: 'Learn all the fundamentals and advanced features of Angular 21 & how to apply them',
      dueDate: '31-12-2025',
    },
    {
      id: 't2',
      userId: 'u1',
      name: 'Master TypeScript',
      summary: 'Learn all the fundamentals and advanced features of TypeScript & how to apply them',
      dueDate: '31-05-2026',
    },
    {
      id: 't3',
      userId: 'u3',
      name: 'Master JavaScript',
      summary: 'Learn all the fundamentals and advanced features of JavaScript & how to apply them',
      dueDate: '22-02-2026',
    },
    {
      id: 't4',
      userId: 'u2',
      name: 'Master HTML',
      summary: 'Learn all the fundamentals and advanced features of HTML & how to apply them',
      dueDate: '31-01-2026',
    },
    {
      id: 't5',
      userId: 'u4',
      name: 'Master CSS',
      summary: 'Learn all the fundamentals and advanced features of CSS & how to apply them',
      dueDate: '31-01-2026',
    },
  ]);

  selectedTasks = computed(() => this.tasks().filter((task: Task) => task.userId === this.id()));
  isAddingTask = signal<boolean>(false);
  
  onCompleteTask(id: string) {
    this.tasks.set(this.tasks().filter((task: Task) => task.id != id));
  }

  onStartAddTask(userId: string) {
    this.isAddingTask.set(true);
  }

  onClose() {
    this.isAddingTask.set(false);
  }
}
