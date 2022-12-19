import { Component, OnInit } from '@angular/core';
import { forecastWeatherResponse } from 'src/app/responses/weather';
import { WeatherService } from 'src/app/services/weather/weather-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  forecast?: forecastWeatherResponse;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecastWeather("Riga", 7).subscribe(x => this.forecast = x);
  }
}
