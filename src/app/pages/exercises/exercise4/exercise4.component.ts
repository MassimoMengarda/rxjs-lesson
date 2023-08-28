import { Component } from '@angular/core';
import { User, UserClient } from '../exercises.service';
import { Observable, Subject, map, startWith, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.scss']
})
export class Exercise4Component {
  private allUsers$ = this.userClient.getUsers();

  nameSubject = new Subject<string>();

  users$?: Observable<User[]>;

  constructor(private userClient: UserClient) { }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nameSubject.next(target.value);
  }

  private filterUsers(users: User[], name: string): User[] {
    return users.filter(user => user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
}
