import { Component, OnInit } from '@angular/core';
import { ErrorHandleService } from 'src/app/services/error-handle/error-handle.service';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit{

  errorMesage: any = null;

  constructor(private errorService: ErrorHandleService) {}

  ngOnInit(): void {
    this.errorService.onAnyError.subscribe(this.onError.bind(this));
  }

  onError(x: any) {
    this.errorMesage = x;
  }

  hasError(): boolean {
    return this.errorService.hasError;
  }

}
