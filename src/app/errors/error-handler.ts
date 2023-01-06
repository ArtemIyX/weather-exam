import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable} from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({providedIn: 'root'})
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any) {
    console.log(Object.keys(error));
    if(error instanceof(HttpErrorResponse)) {
      alertifyjs.error(error.message);
    }
    else {
      alertifyjs.error(error);
    }
  }
}
