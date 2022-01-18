import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentComponent } from './shipment.component';
import { ShipmentRoutingModule } from './shipment-routing.module';

@NgModule({
  declarations: [ShipmentComponent],
  imports: [ShipmentRoutingModule, CommonModule],
})
export class ShipmentModule {}
