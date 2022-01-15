import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccessionsComponent } from './my-accessions.component';
import { MyAccessionsRoutingModule } from './my-accessions-routing.module';

@NgModule({
  declarations: [MyAccessionsComponent],
  imports: [MyAccessionsRoutingModule, CommonModule],
})
export class MyAccessionsModule {}
