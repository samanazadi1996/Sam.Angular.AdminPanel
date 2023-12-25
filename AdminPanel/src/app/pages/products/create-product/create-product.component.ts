import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { ErrorHandler } from '../../../core/helpers/errorHandler';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  createForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private errorHandler: ErrorHandler,
    private dialogRef: MatDialogRef<CreateProductComponent>
  ) {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      barCode: ['', [Validators.required]],
    });
  }
  apiErrors: Array<String> = [];

  save() {
    var product = this.createForm.getRawValue();
    this.httpClient
      .post(environment.baseUrl + 'api/v1/Product/CreateProduct',
        product,
        { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() }) })
      .subscribe((val) => {
        var response = Object(val);
        this.apiErrors = this.errorHandler.GetErrors(response);
        if (response.success) {
          this.closeDialog()
        }
      });
  }
  closeDialog(){
    this.dialogRef.close();
  }
  
}
