import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input.required<string>();
}
