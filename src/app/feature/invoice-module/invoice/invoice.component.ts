import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { columnsInvoices } from 'src/app/core/constants/invoice.constants';
import { InitialMethods } from 'src/app/core/models/interfaces/initial-method.interface';
import { ColumnsInterface } from 'src/app/core/models/interfaces/table.interface';
import {
  Invoice,
  InvoiceView,
} from 'src/app/core/models/invoice/invoice.models';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit, InitialMethods {
  public invoices: InvoiceView[] = [];
  public invoicesColumnsTable: ColumnsInterface[] = columnsInvoices;
  public isLoading: boolean = false;
  constructor(private invoiceService: InvoiceService, private route: Router, private titleService: TitleService) {}

  ngOnInit(): void {
    this.initialSubscription();
    this.initialSettingComponent();
    this.loadInitialData();
  }

  initialSubscription(): void {}

  initialSettingComponent() {
    this.settingTitle();
  }

  settingTitle() {
    this.titleService.emmitTitle({
      title: 'Modulo de facturación',
      description: 'Este es un modulo para ver la facturas creadas'
    })
  }
  
  public async redirectedToCreateInvoice(consecutive?: string, state?: Record<string, any>) {
    this.route.navigate([`/invoice/create-invoice/${consecutive ?? ''}`], {state})
  }

  loadInitialData() {
    // Get invoices
    this.loadInvoices();
  }
  
  handleInvoiceSelected(data: Invoice) {
    this.redirectedToCreateInvoice(data.consecutive, data)
  }
  
  private async loadInvoices() {
    try {
      // Activate loading panel table
      this.hanldeIsLoadingState()
      const invoices = await this.invoiceService.getInvoices();
      this.invoices = invoices.map(
        (i) =>
          new InvoiceView({ ...i, fullName: `${i.name} ${i?.lastName ?? ''}`, parseDate: format(new Date(i.datePurchase), 'dd-MM-yyyy')  })
      );
    } catch (error) {
      throw error;
    } finally {
      // inactivate loading panel table
      this.hanldeIsLoadingState()
    }
  }

  // Helpers
  private hanldeIsLoadingState () {
    this.isLoading = !this.isLoading
  }
  
}
