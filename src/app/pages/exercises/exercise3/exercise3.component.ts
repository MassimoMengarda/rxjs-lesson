import { Component } from '@angular/core';
import { RoleClient, UserClient, UserRoleClient } from '../exercises.service';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.scss']
})
export class Exercise3Component {
  admin$: Observable<string[]> = forkJoin({
    users: this.userClient.getUsers(),
    userRoles: this.userRoleClient.getUserRoles(),
    roles: this.roleClient.getRoles(),
  })
    .pipe(map(({ users, userRoles, roles }) => {
      const adminRole = roles.find(role => role.name === 'Admin')!;
      const adminUserRoles = userRoles.filter(userRole => userRole.roleId === adminRole.id);
      const adminUsers = users.filter(user => adminUserRoles.some(userRole => userRole.userId === user.id));
      return adminUsers.map(user => user.name);
    }));

  constructor(
    private userClient: UserClient,
    private userRoleClient: UserRoleClient,
    private roleClient: RoleClient
  ) { }
}
