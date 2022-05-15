import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiMethodHelpper } from '../helpers/api.helpers';
import { ProductWithPrice } from '../models/product/product.model';

@Injectable()
export class ProductService {
  private url = 'product';
  private apiMethod: ApiMethodHelpper;
  constructor(private http: HttpClient) {
    this.apiMethod = new ApiMethodHelpper(http);
  }

  getProrductWithPrice(): Promise<ProductWithPrice[]> {
    return this.apiMethod.Get<ProductWithPrice[]>(`${this.url}/get-products-with-price`).pipe(map(r => r.products)).toPromise()
  }
}
