import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAccessionsComponent } from './all-accessions.component';
import { AllAccessionsRoutingModule } from './all-accessions-routing.module';

@NgModule({
  declarations: [AllAccessionsComponent],
  imports: [AllAccessionsRoutingModule, CommonModule],
})
export class AllAccessionsModule {}
