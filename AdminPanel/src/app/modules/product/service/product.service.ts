import { UpdateProductDto } from './../dto/UpdateProductDto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiHelperService } from '../../../core/services/api-helper.service';
import { ProductDto } from '../dto/ProductDto';
import { CreateProductDto } from '../dto/CreateProductDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiHelperService) { }

  getProductList(pageNumber: number, pageSize: number): Observable<ProductDto> {
    let params = `?PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const url = environment.baseUrl + 'api/v1/Product/GetPagedListProduct';

    return this.apiService.get<ProductDto>(params, url);
  }
  getProductById(id: number): Observable<ProductDto> {
    let params = `?id=${id}`;
    const url = environment.baseUrl + 'api/v1/Product/GetProductById';
    return this.apiService.get<ProductDto>(params, url);
  }

  createProduct(body: CreateProductDto): Observable<number> {
    const url = environment.baseUrl + 'api/v1/Product/CreateProduct';
    return this.apiService.post<any>(body, url);
  }
  updateProduct(body: UpdateProductDto): Observable<number> {
    const url = environment.baseUrl + 'api/v1/Product/UpdateProduct';
    return this.apiService.put<any>(body, url);
  }
  deleteProductById(id: number): Observable<number> {
    let params = `?id=${id}`;
    const url = environment.baseUrl + 'api/v1/Product/DeleteProduct';
    return this.apiService.delete<any>(params, url);
  }
}
