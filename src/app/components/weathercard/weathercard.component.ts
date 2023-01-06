import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { first } from 'rxjs';
import { Condition, Forecastday, Location } from 'src/app/responses/weather';

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
export interface MobileWeatherData {
  pair: WeatherData[];
}

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css'],
})
export class WeathercardComponent implements OnInit, OnChanges {
  @Input() forecastDay: Forecastday | undefined;
  @Input() location: Location | undefined;
  weatherData: WeatherData[] = [];
  mobileWeatherData: MobileWeatherData[] = [];

  hours: number[] = [2, 5, 8, 11, 14, 17, 20, 23];

  constructor() {}

  ngOnInit(): void {
    this.prepare();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.prepare();
  }

  prepare(): void {
    this.weatherData.splice(0);
    this.forecastDay!.hour.forEach((x) => {
      const date: Date = new Date(x.time);
      const hour: number = date.getHours();
      if (this.hours.includes(hour)) {
        let data: WeatherData = {
          time: date.getHours() + ':00',
          temp_c: x.temp_c,
          humidity: x.humidity,
          pressure_mb: x.pressure_mb,
          condition: x.condition,
          wind_mph: x.wind_mph,
          wind_dir: x.wind_dir,
          chance_of_rain: x.chance_of_rain,
          chance_of_snow: x.chance_of_snow,
        };
        this.weatherData.push(data);
      }
    });

    this.mobileWeatherData = this.constructMobileData(this.weatherData);
  }

  private constructMobileData(desktopData: WeatherData[]): MobileWeatherData[] {
    let pairs = [];
    for (var i = 0; i < desktopData.length; i += 2) {
      if (!(i + 1 >= desktopData.length)) {
        pairs.push([desktopData[i], desktopData[i + 1]]);
      } else {
        pairs.push([desktopData[i]]);
      }
    }
    let result: MobileWeatherData[] = [];
    pairs.forEach((x) => {
      let mobileData: MobileWeatherData = {
        pair: x
      }
      result.push(mobileData);
    });
    return result;
  }

  isDelim(item: WeatherData): boolean {
    return (this.weatherData.indexOf(item) + 1) % 2 == 0;
  }
}
