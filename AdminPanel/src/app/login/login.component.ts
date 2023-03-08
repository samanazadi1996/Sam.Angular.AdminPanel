import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from "../core/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService
      ) { }
  title = "Login"
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  user = {
    userName: '',
    password: ''
  }
  public login() {
    this.authenticationService.login(this.user.userName,this.user.password);
  }
}
