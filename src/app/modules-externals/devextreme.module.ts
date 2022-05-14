import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxToastModule } from 'devextreme-angular';

@NgModule({
    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxFormModule,
        DxToastModule
    ],
    exports: [
        DxButtonModule,
        DxDataGridModule,
        DxFormModule,
        DxToastModule
    ]
})

export class DevExtremeModule { }