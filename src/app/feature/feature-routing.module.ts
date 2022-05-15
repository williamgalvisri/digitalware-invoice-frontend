import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () => import('./invoice-module/invoice.module').then(m => m.InvoiceModule)
  },{
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
