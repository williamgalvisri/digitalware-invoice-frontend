import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxLookupModule, DxSelectBoxModule, DxTextBoxModule, DxToastModule } from 'devextreme-angular';

@NgModule({
    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxFormModule,
        DxToastModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxLookupModule
    ],
    exports: [
        DxButtonModule,
        DxDataGridModule,
        DxFormModule,
        DxToastModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxLookupModule
    ]
})

export class DevExtremeModule { }