import { Component } from '@angular/core';
import { UserClient, UserRoleClient } from '../exercises.service';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component {
  name = 'John';

  roleCount$?: Observable<number> = this.userClient.getUserByName(this.name)
    .pipe(
      switchMap(user => this.userRoleClient.getUserRolesByUserId(user!.id)),
      map(userRoles => userRoles.length)
    );

  constructor(
    private userClient: UserClient,
    private userRoleClient: UserRoleClient
  ) { }
}
