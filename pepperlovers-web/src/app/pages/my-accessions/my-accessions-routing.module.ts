import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccessionsComponent } from './my-accessions.component';

const routes: Routes = [{ path: ':year', component: MyAccessionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccessionsRoutingModule {}
