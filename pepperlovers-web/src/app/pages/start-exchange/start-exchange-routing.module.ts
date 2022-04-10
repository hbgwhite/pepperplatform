import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartExchangeComponent } from './start-exchange.component';

const routes: Routes = [{ path: '', component: StartExchangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExchangeComponentRoutingModule {}
