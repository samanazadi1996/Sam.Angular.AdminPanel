import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private storagekey = 'profile';
  isLoggedIn = false;

  constructor(private httpClient: HttpClient, public router: Router) {
    var token = localStorage.getItem(this.storagekey);
    this.isLoggedIn = !!token;
  }

  login(userName: string, password: string) {
    var user = { userName, password };
    localStorage.removeItem(this.storagekey);

    this.httpClient
      .post(environment.baseUrl + 'api/v1/Account/Authenticate', user)
      .subscribe(
        (val) => {
          var response = Object(val);
          this.isLoggedIn = response.success;
          if (response.success) {
            localStorage.setItem(
              this.storagekey,
              JSON.stringify(response.data)
            );
            this.router.navigate(['/']);
          } else {
            var error = [];
            for (
              let index = 0;
              index < response.operationErrors.length;
              index++
            ) {
              const element = response.operationErrors[index];
              error.push(element.errorMessage);
            }
            alert(error.join(','));
          }
        },
        (response) => {
          var error = [];
          for (
            let index = 0;
            index < response.error.validationErrors.length;
            index++
          ) {
            const element = response.error.validationErrors[index];
            error.push(element.errorMessage);
          }
          alert(error.join(','));
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
  }

  logout() {
    localStorage.removeItem(this.storagekey);
    this.router.navigate(['/login']);
  }
  getUserName() {
    var obj = JSON.parse(localStorage.getItem(this.storagekey) ?? "{}");
    return obj?.userName ?? "notfound";
  }

}
