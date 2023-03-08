import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private httpClient: HttpClient) {
    }
    private storagekey = "profile";

    login(userName: string, password: string) {
        var user = { userName, password }
        localStorage.removeItem(this.storagekey)

        this.httpClient.post(environment.baseUrl + "api/v1/Account/Authenticate", user)
            .subscribe(
                (val) => {
                    localStorage.setItem(this.storagekey, JSON.stringify(val))
                },
                response => {
                    var error = []
                    for (let index = 0; index < response.error.validationErrors.length; index++) {
                        const element = response.error.validationErrors[index];
                        error.push(element.errorMessage)
                    }
                    alert(error.join(","))
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
    }

    logout() {
        alert('')
    }
}
