import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportUsComponent } from './support-us.component';
import { SupportUsRoutingModule } from './support-us-routing.module';

@NgModule({
  declarations: [SupportUsComponent],
  imports: [SupportUsRoutingModule, CommonModule],
})
export class SupportUsModule {}
