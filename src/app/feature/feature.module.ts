import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [
    FeatureRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class FeatureModule { }
