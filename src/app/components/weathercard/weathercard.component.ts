import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/responses/weather';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent {

  @Input() data?: Forecast;
  constructor() {

  }
}
