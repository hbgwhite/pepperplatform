import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  // TODO: Implement error modal instead of console logs and alerts

  constructor() {}

  public warning(err: any) {
    console.warn(err);
  }

  public error(err: any) {
    console.error(err);
    alert(
      `An error occurred${typeof err === 'string' || err instanceof String ? ' - ' + err : ''}`
    );
  }
}
