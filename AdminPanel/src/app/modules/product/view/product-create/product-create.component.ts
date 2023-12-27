import { CreateProductDto } from './../../dto/CreateProductDto';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  createForm: FormGroup;
  createProductDto: CreateProductDto;

  constructor(
    public router: Router,
    private productsService: ProductService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductCreateComponent>
  ) {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      barCode: ['', [Validators.required]],
    });
    this.createProductDto = new CreateProductDto();
  }

  apiErrors: Array<String> = [];

  save() {
    this.createProductDto.init({
      name: this.createForm.get('name')?.value,
      price: this.createForm.get('price')?.value,
      barCode: this.createForm.get('barCode')?.value,
    });

    this.productsService
      .createProduct(this.createProductDto)
      .subscribe((response: any) => {
        this.closeDialog();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
