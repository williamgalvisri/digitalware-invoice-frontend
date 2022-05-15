import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './services/customer.service';
import { InvoiceService } from './services/invoice.service';
import { LoadingService } from './services/loading.service';
import { ProductService } from './services/product.service';
import { TitleService } from './services/title.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [InvoiceService, TitleService, CustomerService, ProductService, LoadingService],
  exports: [],
})
export class CoreModule {}
