import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTaskComponent {
  close = output<void>();
  taskTitle = signal<string>('');
  taskSummary = signal<string>('');
  taskDueDate = signal<string>('');
  userId = input.required<string>();
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.tasksService.addTask(
      {
        title: this.taskTitle(),
        summary: this.taskSummary(),
        dueDate: this.taskDueDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
