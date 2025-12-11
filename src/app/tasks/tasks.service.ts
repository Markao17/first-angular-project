import { computed, signal } from '@angular/core';
import { Task } from './task/task.model';
import { NewTask } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal([
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

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task: Task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: (this.tasks().length + 1).toString(),
        userId: userId,
        name: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
    ]);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task: Task) => task.id != taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
