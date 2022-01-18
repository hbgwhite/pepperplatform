import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import { ContributeRoutingModule } from './contribute-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [ContributeComponent],
  imports: [
    ContributeRoutingModule,
    CommonModule,
    NzTypographyModule,
    NzCardModule,
    NzAvatarModule,
  ],
})
export class ContributeModule {}
