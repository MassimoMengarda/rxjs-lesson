import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserClient {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
  }

  getUserByName(name: string): Observable<User | undefined> {
    return of(this.users.find(user => user.name === name));
  }
}

@Injectable({ providedIn: 'root' })
export class UserRoleClient {
  private userRoles: UserRole[] = [
    { id: 1, userId: 1, roleId: 1 },
    { id: 2, userId: 1, roleId: 2 },
    { id: 3, userId: 2, roleId: 1 },
    { id: 4, userId: 2, roleId: 3 },
    { id: 5, userId: 3, roleId: 2 },
  ];

  getUserRoles(): Observable<UserRole[]> {
    return of(this.userRoles);
  }

  getUserRolesByUserId(userId: number): Observable<UserRole[]> {
    return of(this.userRoles.filter(userRole => userRole.userId === userId));
  }
}

@Injectable({ providedIn: 'root' })
export class RoleClient {
  private roles: Role[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Manager' },
    { id: 3, name: 'User' },
  ];

  getRoles(): Observable<Role[]> {
    return of(this.roles);
  }

  getRole(id: number): Observable<Role | undefined> {
    return of(this.roles.find(role => role.id === id));
  }
}

export interface User {
  id: number;
  name: string;
}

export interface UserRole {
  id: number;
  userId: number;
  roleId: number;
}

export interface Role {
  id: number;
  name: string;
}