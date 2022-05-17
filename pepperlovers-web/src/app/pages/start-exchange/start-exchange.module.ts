import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartExchangeComponent } from './start-exchange.component';
import { StartExchangeComponentRoutingModule } from './start-exchange-routing.module';

@NgModule({
  declarations: [StartExchangeComponent],
  imports: [StartExchangeComponentRoutingModule, CommonModule],
})
export class StartExchangeModule {}
