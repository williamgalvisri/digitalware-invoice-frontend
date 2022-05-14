import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  imports:[HttpClientModule],
  providers: [InvoiceService],
  exports: []
})
export class CoreModule { }
