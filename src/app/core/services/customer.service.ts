import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiMethodHelpper } from '../helpers/api.helpers';
import { Customer } from '../models/customer/customer.model';

@Injectable()
export class CustomerService {
  private apiMethod: ApiMethodHelpper;
  private url = 'customer';
  constructor(private http: HttpClient) { 
    this.apiMethod = new ApiMethodHelpper(http);
  }

  getAllCustomers(): Promise<Customer[]> {
    return this.apiMethod.Get<Customer[]>(`${this.url}/get-customers`).pipe(map(r => r.customers)).toPromise()
  }
}
