import { EventEmitter, Injectable } from '@angular/core';
import { forecastWeatherResponse } from 'src/app/responses/weather';
import { WeatherService } from '../weather/weather-service.service';

@Injectable({
  providedIn: 'root'
})
export class DayManipulatorService {

  selectedDay: number = 0;
  forecast: forecastWeatherResponse | undefined;
  onForecastLoaded: EventEmitter<forecastWeatherResponse> = new EventEmitter<forecastWeatherResponse>();

  constructor(private weatherService: WeatherService) { }

  getForecast(): forecastWeatherResponse | undefined {
    return this.forecast;
  }

  loadForecast(city: string): void {
    this.weatherService.getForecastWeather(city, 3).subscribe(x => {
      this.forecast = x;
      this.onForecastLoaded.emit(this.forecast);
    });
  }

  selectDay(index: number) {
    this.selectedDay = index;
  }
}
