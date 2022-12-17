import { Component } from '@angular/core';
import { WeatherService } from './services/weather-service.service';
import { Observable, throwError } from 'rxjs';
import { currentWeatherResponse } from './responses/currentWeather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-exam';
  _cur: currentWeatherResponse | any;

  constructor(private weather: WeatherService) {}
  testFunc() {
    this.weather.getCurrentWeather("London").subscribe(x => this._cur = x);
  }
}
