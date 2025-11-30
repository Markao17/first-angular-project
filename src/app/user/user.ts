import { Component, input, computed, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

// input with lowercase receives a signal
export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  avatarUrl = computed(() => 'users/' + this.avatar());

  onSelectedUser() {
    this.select.emit(this.id());
  }
}
