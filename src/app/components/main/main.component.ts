import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { forecastWeatherResponse } from 'src/app/responses/weather';
import { DayManipulatorService } from 'src/app/services/day-manipulator/day-manipulator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLoaded: boolean = false;
  forecastWeatherResponse: forecastWeatherResponse | undefined;

  constructor(private mainService: DayManipulatorService) {}

  ngOnInit(): void {
    this.mainService.onForecastLoaded.subscribe(this.forecastLoaded.bind(this));
    this.mainService.loadForecast();
  }

  forecastLoaded(forecast: forecastWeatherResponse): void {
    this.forecastWeatherResponse = forecast;
    this.isLoaded = true;
    console.log("forecastLoaded()");
  }

  isReady(){
    return this.isLoaded;
  }
}
