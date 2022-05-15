import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiMethodHelpper } from '../helpers/api.helpers';
import { InvoicePayloadInterface } from '../models/interfaces/invoice-api.interface';
import { Invoice, InvoiceView, InvoiceWithDetail } from '../models/invoice/invoice.models';

@Injectable()
export class InvoiceService {
  private url = 'invoice';
  private apiMethod: ApiMethodHelpper;
  constructor(private http: HttpClient) {
    this.apiMethod = new ApiMethodHelpper(http);
  }

  public async getInvoices(): Promise<InvoiceView[]> {
    return this.apiMethod
      .Get<InvoiceView[]>(this.url)
      .pipe(map((r) => r.invoices))
      .toPromise();
  }

  public async getConsecutive(): Promise<string> {
    return this.apiMethod.Get<string>(`${this.url}/new-consecutive`).pipe(map(r => r.consecutive)).toPromise()
  }

  public async getInvoiceByConsecutive(consecutive: string): Promise<InvoiceWithDetail> {
    return this.apiMethod.Get<InvoiceWithDetail>(`${this.url}/get-by-consecutive/${consecutive}`).pipe(map(r => r.invoice)).toPromise()
  }
  
  public async saveInvoice(invoice: InvoicePayloadInterface): Promise<void> {
    this.apiMethod.Post<void>(this.url, invoice).toPromise()
  }

  public async updateInvoice(idInvoice: number, invoice: InvoicePayloadInterface): Promise<void> {
    this.apiMethod.Put<void>(`${this.url}/${idInvoice}`, invoice).toPromise()
  }
}
