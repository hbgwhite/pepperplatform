import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FAQRoutingModule } from './faq-routing.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [FAQRoutingModule, CommonModule],
})
export class FAQModule {}
