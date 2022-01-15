import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TimelineRoutingModule } from './timeline-routing.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [TimelineRoutingModule, CommonModule, NzTimelineModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}
