import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangelogComponent } from './changelog.component';
import { ChangelogRoutingModule } from './changelog-routing.module';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [ChangelogComponent],
  imports: [ChangelogRoutingModule, CommonModule, NzCommentModule, NzListModule, NzAvatarModule],
})
export class ChangelogModule {}
