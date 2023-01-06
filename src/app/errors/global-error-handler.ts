import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { ErrorHandleService } from "../services/error-handle/error-handle.service";

@Injectable({providedIn: 'root'})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorService: ErrorHandleService
  ) {}

  handleError(error: any) {
    // if (!(error instanceof HttpErrorResponse)) {
    //   error = error.rejection; // get the error object
    // }

    console.error('Error from global error handler', error);
    this.errorService.notifyError(error.toString());
  }
}
