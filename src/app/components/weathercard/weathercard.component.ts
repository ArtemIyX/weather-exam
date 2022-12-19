import { Component, Input, OnInit } from '@angular/core';
import { Forecast, Forecastday } from 'src/app/responses/weather';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  @Input() forecastDay: Forecastday | undefined;

  constructor() {

  }
  ngOnInit(): void {
    
  }
}
