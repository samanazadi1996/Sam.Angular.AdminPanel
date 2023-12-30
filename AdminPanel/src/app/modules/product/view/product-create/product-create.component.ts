import { CreateProductDto } from './../../dto/CreateProductDto';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent {
  @Output() productSaved: EventEmitter<void> = new EventEmitter<void>();

  createForm: FormGroup;

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
  }

  save() {
    var createProductDto = new CreateProductDto();

    createProductDto.init({
      name: this.createForm.get('name')?.value,
      price: this.createForm.get('price')?.value,
      barCode: this.createForm.get('barCode')?.value,
    });

    this.productsService
      .createProduct(createProductDto)
      .subscribe((response: any) => {
        if (response.success) this.closeDialog();
      });
  }

  closeDialog() {
    this.productSaved.emit();
    this.dialogRef.close();
  }
}
