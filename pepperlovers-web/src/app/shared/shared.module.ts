import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { ApiService } from './api.service';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: SharedService },
        { provide: ApiService },
        { provide: ErrorHandlerService },
      ],
    };
  }
}
