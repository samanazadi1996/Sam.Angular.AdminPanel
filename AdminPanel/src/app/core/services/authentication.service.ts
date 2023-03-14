import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private storagekey = 'profile';
  isLoggedIn = false;

  constructor() {
    var token = localStorage.getItem(this.storagekey);
    this.isLoggedIn = !!token;
  }

  login(model: Object) {
    var obj = Object(model);

    localStorage.setItem(
      this.storagekey,
      JSON.stringify(obj.data)
    );
    this.isLoggedIn = obj.success;
  }

  logout() {
    localStorage.removeItem(this.storagekey);
  }
  getUserName() {
    var obj = JSON.parse(localStorage.getItem(this.storagekey) ?? "{}");
    return obj?.userName ?? "notfound";
  }

}
