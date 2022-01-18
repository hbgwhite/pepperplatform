import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerStatsComponent } from './server-stats.component';
import { ServerStatsRoutingModule } from './server-stats-routing.module';

@NgModule({
  declarations: [ServerStatsComponent],
  imports: [ServerStatsRoutingModule, CommonModule],
})
export class ServerStatsModule {}
