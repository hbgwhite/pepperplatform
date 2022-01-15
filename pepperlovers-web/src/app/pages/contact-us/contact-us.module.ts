import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [ContactUsRoutingModule, CommonModule, NzTypographyModule, NzCardModule, NzAvatarModule],
})
export class ContactUsModule {}
