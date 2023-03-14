import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../core/services/authentication.service';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ErrorHandler } from '../core/helpers/errorHandler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private httpClient: HttpClient, public router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private errorHandler: ErrorHandler
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
          ),
        ],
      ],
    });
  }
  title = 'Login';
  apiErrors: Array<String> = []
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  public login() {
    var user = this.loginForm.getRawValue();
    this.httpClient
      .post(environment.baseUrl + 'api/v1/Account/Authenticate', user)
      .subscribe(
        (val) => {
          var response = Object(val);
          this.apiErrors = this.errorHandler.GetErrors(response)
          if (response.success) {
            this.authenticationService.login(response);
            this.router.navigate(['/']);
          }
        }
      );

  }
}
