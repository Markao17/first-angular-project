import { Component, input, computed, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

// input with lowercase receives a signal
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  isSelected = input<boolean>();

  avatarUrl = computed(() => 'users/' + this.user().avatar);

  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}
