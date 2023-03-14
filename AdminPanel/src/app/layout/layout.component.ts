import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from "../core/services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  userName:string='';

  constructor(private titleService: Title,private authenticationService: AuthenticationService,public router: Router) { }
  ngOnInit() {
    this.userName=this.authenticationService.getUserName()
    this.title = this.titleService.getTitle();
  }
  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  title = ""
  menu = [
    {
      title: 'داشبورد',
      url: 'dashboard',
      icon: 'dashboard'
    },
    {
      title: 'لیست کاربران',
      url: 'person',
      icon: 'person'
    },
    {
      title: 'داشبورد3',
      url: 'dashboard',
      icon: 'dashboard'
    }
  ]
}
