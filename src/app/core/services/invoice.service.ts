import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiMethodHelpper } from '../helpers/api.helpers';
import { Invoice, InvoiceView } from '../models/invoice/invoice.models';

@Injectable()
export class InvoiceService {
  private url = 'invoice';
  private apiMethod: ApiMethodHelpper;
  constructor(private http: HttpClient) { 
    this.apiMethod = new ApiMethodHelpper(http)
  }

  public async getInvoices(): Promise<InvoiceView[]> {
    return this.apiMethod.Get<InvoiceView[]>(this.url).pipe(map(r => r.invoices)).toPromise()
  }
}
