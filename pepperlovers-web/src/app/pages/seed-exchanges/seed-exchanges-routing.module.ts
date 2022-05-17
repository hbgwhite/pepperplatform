import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeedExchangesComponent } from './seed-exchanges.component';

const routes: Routes = [{ path: '', component: SeedExchangesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedExchangesRoutingModule {}
