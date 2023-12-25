import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from './create-product/create-product.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ErrorHandler } from '../../core/helpers/errorHandler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(public dialog: MatDialog,
    private httpClient: HttpClient,
    public router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private errorHandler: ErrorHandler,
  ) {
  }
  ngOnInit(): void {
    this.loadList()
  }
  listProducts = [];
  loadList() {
    this.httpClient
      .get(environment.baseUrl + 'api/v1/Product/GetPagedListProduct',
        { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() }) })
      .subscribe((val) => {
        var response = Object(val);
        if (response.success) {
          this.listProducts = response.data;
          console.log(this.listProducts)
        }
      });

  }
  CreateProduct() {
    let dialogRef = this.dialog.open(CreateProductComponent, {
      width: '600px',
    });
  }

}
