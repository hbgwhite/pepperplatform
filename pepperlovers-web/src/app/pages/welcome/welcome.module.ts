import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [WelcomeRoutingModule, NzDividerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
