import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { columnsInvoices } from 'src/app/core/constants/invoice.constants';
import { ColumnsInterface } from 'src/app/core/models/interfaces/table.interface';
import {
  Invoice,
  InvoiceView,
} from 'src/app/core/models/invoice/invoice.models';
import { InvoiceService } from 'src/app/core/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  public invoices: InvoiceView[] = [];
  public invoicesColumnsTable: ColumnsInterface[] = columnsInvoices;
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  private async loadInitialData() {
    // Get invoices
    this.loadInvoices();
  }

  private async loadInvoices() {
    try {
      const invoices = await this.invoiceService.getInvoices();
      console.log(this.invoices);
      this.invoices = invoices.map(
        (i) =>
          new InvoiceView({ ...i, fullName: `${i.name} ${i?.lastName ?? ''}`, parseDate: format(new Date(i.datePurchase), 'dd-MM-yyyy')  })
      );
    } catch (error) {
      throw error;
    }
  }
}
