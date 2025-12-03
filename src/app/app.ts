import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserComponent } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-angular-project');

  users = signal(DUMMY_USERS);
  selectedUserId = signal<string>('');
  selectedUserName = computed(() => this.users().find(user => user.id == this.selectedUserId())?.name);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
