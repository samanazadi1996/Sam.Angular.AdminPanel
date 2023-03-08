import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private titleService: Title) { }
  title = "Login"
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  user = {
    username: '',
    password: ''
  }

}
