import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'src/app/modules-externals/devextreme.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
    declarations: [InvoiceComponent],
    imports: [SharedModule, InvoiceRoutingModule, DevExtremeModule],
})
export class InvoiceModule { }
