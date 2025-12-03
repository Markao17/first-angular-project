import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {

  close = output<void>();

  onCancel() {
    this.close.emit();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(e);
  }

}
