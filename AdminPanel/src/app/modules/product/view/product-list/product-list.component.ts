import Swal from 'sweetalert2';
import { ProductUpdateComponent } from './../product-update/product-update.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductService } from '../../service/product.service';
import { IProductDto } from '../../dto/ProductDto';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';
import { GridSettings } from 'src/app/core/services/GridSettings';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public router: Router,
    private productsService: ProductService,
    private translate: TranslateService
  ) { }
  ngOnInit(): void {
    this.getProducts();
  }
  pageNumber = 1;
  pageSize = 20;
  totalPages?: number;

  onPageChange(model: any): void {
    this.pageNumber = model.page;
    this.pageSize = model.pageSize ?? this.pageSize;
    this.getProducts();
  }

  listProducts: IProductDto[] = [];

  getProducts(): void {
    this.productsService
      .getProductList(this.pageNumber, this.pageSize)
      .subscribe((response: any) => {
        if (response.success) {
          this.listProducts = response.data;
          this.totalPages = response.totalPages;
          // this.dataSource = new MatTableDataSource<IProductDto>(response.data);
        }
      });
  }

  createProduct() {
    this.dialog.open(ProductCreateComponent, {
      width: '600px',
    }).componentInstance.productSaved.subscribe(() => {
      this.getProducts();
    });
  }

  updateProduct(id: any) {
    this.dialog.open(ProductUpdateComponent, {
      width: '600px',
      data: { id },
    }).componentInstance.productSaved.subscribe(() => {
      this.getProducts();
    });
  }

  deleteProduct(id: any) {
    var messages = {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      deleted: 'Deleted',
      yourProductHasBeenDeleted: 'Your product has been deleted',
      ok: 'ok',
    };
    var titleList = [
      messages.title,
      messages.text,
      messages.confirmButtonText,
      messages.cancelButtonText,
      messages.deleted,
      messages.yourProductHasBeenDeleted,
      messages.ok,
    ];
    this.translate.get(titleList).subscribe((translations: any) => {
      Swal.fire({
        title: translations[messages.title],
        text: translations[messages.text],
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: translations[messages.confirmButtonText],
        cancelButtonText: translations[messages.cancelButtonText],
      }).then((result) => {
        if (result.isConfirmed) {
          this.productsService
            .deleteProductById(id)
            .subscribe((response: any) => {
              if (response.success) {
                this.getProducts();
                Swal.fire({
                  title: translations[messages.deleted],
                  text: translations[messages.yourProductHasBeenDeleted],
                  icon: 'success',
                  confirmButtonText: translations[messages.ok],
                });
              }
            });
        }
      });
    });
  }

  // grid
  // dataSource = new MatTableDataSource<IProductDto>();
  // gridSettings: GridSettings = {
  //   columnsConfig: [
  //     {
  //       field: 'id',
  //       title: 'Id',
  //       width: 0,
  //       hidden: true,
  //     },
  //     {
  //       field: 'name',
  //       title: 'Name',
  //       width: 200,
  //       hidden: false,
  //     }, {
  //       field: 'price',
  //       title: 'Price',
  //       width: 200,
  //       hidden: false,
  //     }, {
  //       field: 'barCode',
  //       title: 'BarCode',
  //       width: 200,
  //       hidden: false,
  //     },
  //   ],
  // };
  // displayedColumns: string[] = [
  //   'id',
  //   'name',
  //   'price',
  //   'barCode'
  // ];


}
