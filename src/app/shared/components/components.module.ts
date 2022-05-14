import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DevExtremeModule } from 'devextreme-angular';



@NgModule({
  imports: [CommonModule, RouterModule, DevExtremeModule],
  declarations: [
    SidebarComponent,
    LayoutComponent,
    TableComponent,
  ],
  exports: [SidebarComponent, LayoutComponent, TableComponent]
})
export class ComponentsModule { }
