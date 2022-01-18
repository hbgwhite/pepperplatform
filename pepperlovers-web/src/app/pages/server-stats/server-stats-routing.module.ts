import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerStatsComponent } from './server-stats.component';

const routes: Routes = [{ path: '', component: ServerStatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerStatsRoutingModule {}
