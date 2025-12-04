import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTaskComponent {

  close = output<void>();
  newTask = output<NewTask>();
  taskTitle = signal<string>('');
  taskSummary = signal<string>('');
  taskDueDate = signal<string>('');

  onCancel() {
    this.close.emit();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.newTask.emit({
      title: this.taskTitle(),
      summary: this.taskSummary(),
      dueDate: this.taskDueDate(),
    });
  }

}
