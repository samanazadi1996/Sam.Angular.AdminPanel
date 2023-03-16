import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private storagekey = 'profile';
  private profile :any ;
  isLoggedIn = false;

  constructor(private router: Router) {
    this.profile = localStorage.getItem(this.storagekey);
    this.isLoggedIn = !!this.profile;
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
    this.router.navigate(['/login']);
  }
  getUserName() {
    var obj = JSON.parse(this.profile ?? "{}");
    return obj?.userName ?? "notfound";
  }
  getToken() {
    var obj = JSON.parse(this.profile ?? "{}");
    return obj?.jwToken;
  }
  errorHandler(error: any) {
    if(error.status==401){
      this.logout();
    }
  }

}
