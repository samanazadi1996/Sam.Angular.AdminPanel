import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Output,
  NgModule,
  Input,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { UpdateProductDto } from '../../dto/UpdateProductDto';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent {
  @Output() productSaved: EventEmitter<void> = new EventEmitter<void>();
  updateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public router: Router,
    private productsService: ProductService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductCreateComponent>
  ) {
    this.updateForm = this.fb.group({
      id: [data.id],
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      barCode: ['', [Validators.required]],
    });

    this.productsService.getProductById(data.id).subscribe((response: any) => {
      this.updateForm.patchValue(response.data);
    });
  }

  save() {
    this.productsService
      .updateProduct(this.updateForm.value)
      .subscribe((response: any) => {
        if (response.success) this.closeDialog();
      });
  }

  closeDialog() {
    this.productSaved.emit();
    this.dialogRef.close();
  }
}
