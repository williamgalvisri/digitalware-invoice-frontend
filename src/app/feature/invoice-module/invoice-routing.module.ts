import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    data: {
      title: 'Facturación',
      description: 'Bienvenido a la sección de facturación.'
    }
  },
  { path: '', redirectTo: '/invoice', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
