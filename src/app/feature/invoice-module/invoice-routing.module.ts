import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
  },
  {
    path: 'create-invoice',
    children: [
      {
        path: '',
        component: CreateInvoiceComponent,
      },
      {
        path: ':consecutive',
        component: CreateInvoiceComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/invoice', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
