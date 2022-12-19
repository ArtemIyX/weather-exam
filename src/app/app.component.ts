import { Component } from '@angular/core';
import { WeatherService } from './services/weather/weather-service.service';
import { Observable, throwError } from 'rxjs';
import { currentWeatherResponse } from './responses/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-exam';

  constructor(private weather: WeatherService) {}
}
