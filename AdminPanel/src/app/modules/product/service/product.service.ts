import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiHelperService } from '../../../core/services/api-helper.service';
import { ProductDto } from '../dto/product.dto';
import { CreateProductDto } from '../dto/CreateProductDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiHelperService) {}

  getProductList(): Observable<ProductDto> {
    let params = '';
    const url = environment.baseUrl + 'api/v1/Product/GetPagedListProduct';

    return this.apiService.get<ProductDto>(params, url);
  }

  createProduct(body: CreateProductDto): Observable<number> {
    const url = environment.baseUrl + 'api/v1/Product/CreateProduct';
    return this.apiService.post<any>(body, url);
  }
}
