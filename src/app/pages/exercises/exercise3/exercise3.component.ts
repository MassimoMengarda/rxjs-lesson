import { Component } from '@angular/core';
import { RoleClient, UserClient, UserRoleClient } from '../exercises.service';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.scss']
})
export class Exercise3Component {
  admin$?: Observable<string[]>;

  constructor(
    private userClient: UserClient,
    private userRoleClient: UserRoleClient,
    private roleClient: RoleClient
  ) { }
}
