import { EventEmitter, Injectable } from '@angular/core';
import { forecastWeatherResponse } from 'src/app/responses/weather';
import { WeatherService } from '../weather/weather-service.service';

@Injectable({
  providedIn: 'root'
})
export class DayManipulatorService {

  forecast: forecastWeatherResponse | undefined;
  onForecastLoaded: EventEmitter<forecastWeatherResponse> = new EventEmitter<forecastWeatherResponse>();

  constructor(private weatherService: WeatherService) { }

  getForecast(): forecastWeatherResponse | undefined {
    return this.forecast;
  }

  loadForecast(): void {
    this.weatherService.getForecastWeather("Riga", 3).subscribe(x => {
      this.forecast = x;
      this.onForecastLoaded.emit(this.forecast);
    });
  }
}
