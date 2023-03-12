import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../core/services/authentication.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
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
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  public login() {
    var temp = this.loginForm.getRawValue();
    this.authenticationService.login(temp.userName, temp.password);
  }
}
