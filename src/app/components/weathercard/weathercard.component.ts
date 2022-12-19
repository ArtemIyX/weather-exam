import { Component, Input, OnInit } from '@angular/core';
import { Condition, Forecastday } from 'src/app/responses/weather';

export interface WeatherData {
  time: string;
  temp_c: number;
  humidity: number;
  pressure_mb: number;
  wind_mph: number;
  wind_dir: string;
  chance_of_rain: number;
  chance_of_snow: number;
   condition: Condition;
}

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  @Input() forecastDay: Forecastday | undefined;

  weatherData: WeatherData[] = [];
  private hours: number[] = [
    2, 5, 8, 11, 14, 17, 20, 23
  ]

  constructor() {

  }
  ngOnInit(): void {
    this.forecastDay!.hour.forEach(x => {
      const date: Date = new Date(x.time);
      const hour: number = date.getHours();
      if(this.hours.includes(hour)) {
        let data: WeatherData = {
          time: date.getHours() + ":00",
          temp_c: x.temp_c,
          humidity: x.humidity,
          pressure_mb: x.pressure_mb,
          condition: x.condition,
          wind_mph: x.wind_mph,
          wind_dir: x.wind_dir,
          chance_of_rain: x.chance_of_rain,
          chance_of_snow: x.chance_of_snow,
        }
        this.weatherData.push(data);
      }
    });
  }
}
