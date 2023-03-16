import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private titleService: Title, private httpClient: HttpClient, private authenticationService: AuthenticationService) { }
  title = "dashboard"
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.httpClient
      .get(environment.baseUrl + 'api/v1/Account/test'
        , { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() }) })
      .subscribe(
        (val) => {
          var response = Object(val);
          console.log(response);
        }, error => {
          this.authenticationService.errorHandler(error);
        }
      );
  }
  mbox() {
    alert("test")
  }
}
