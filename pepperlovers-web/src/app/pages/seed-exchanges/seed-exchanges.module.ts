import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedExchangesComponent } from './seed-exchanges.component';
import { SeedExchangesRoutingModule } from './seed-exchanges-routing.module';

@NgModule({
  declarations: [SeedExchangesComponent],
  imports: [SeedExchangesRoutingModule, CommonModule],
})
export class SeedExchangesModule {}
