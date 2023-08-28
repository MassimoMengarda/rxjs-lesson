import { Component } from '@angular/core';
import { UserClient } from '../exercises.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component {
  names$?: Observable<string[]> = this.userClient.getUsers()
    .pipe(map(users => users.map(user => user.name)));

  constructor(private userClient: UserClient) { }
}
