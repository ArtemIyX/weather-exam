import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor() { }

  onAnyError: EventEmitter<any> = new EventEmitter<any>();

  hasError: boolean = false;

  private interval: any;

  notifyError(error: any): void {
    clearInterval(this.interval);

    this.hasError = true;
    this.onAnyError.emit(error);


    this. interval = setInterval(() => {
      this.hasError = false;
    },1000);
  }
}
