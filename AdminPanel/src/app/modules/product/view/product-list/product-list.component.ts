import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductService } from '../../service/product.service';
import { IProductDto } from '../../dto/product.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public router: Router,
    private productsService: ProductService,
  ) {
  }
  ngOnInit(): void {
    this.getProducts();
  }
  listProducts: IProductDto[] = [];

  getProducts(): void {
    this.productsService
      .getProductList()
      .subscribe((response: any) => {
        if (response.success) this.listProducts = response.data;
      });
  }


  CreateProduct() {
    let dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getProducts();
    });
  
  }
}
