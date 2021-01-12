import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  authUser(user: User) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    return UserArray.find(p => p.userName === user.userName && p.password === user.password);
  }
}

