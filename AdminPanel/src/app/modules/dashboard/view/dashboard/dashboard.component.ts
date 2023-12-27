import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private titleService: Title, private httpClient: HttpClient, private authenticationService: AuthenticationService) { }
  title = "dashboard"
  ngOnInit() {
    this.titleService.setTitle(this.title);  }
  mbox() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
}
