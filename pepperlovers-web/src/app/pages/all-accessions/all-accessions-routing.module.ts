import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAccessionsComponent } from './all-accessions.component';

const routes: Routes = [{ path: ':year', component: AllAccessionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAccessionsRoutingModule {}
