import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
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
