import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  currentWeatherResponse,
  forecastWeatherResponse,
} from '../../responses/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '54afe920b17945da9d5210848221712';
  private apiUrl: string = 'http://api.weatherapi.com/v1/';
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) : Observable<currentWeatherResponse> {
    let query = {
      key: this.apiKey,
      q: city,
      aqi: 'no',
    };
    return this.http.get<currentWeatherResponse>(
      this.apiUrl + 'current.json?'
      + new URLSearchParams(query).toString()
    );
  }

  getForecastWeather(city: string, amount: number) : Observable<forecastWeatherResponse> {
    //return this.http.get<forecastWeatherResponse>("http://localhost:4200/assets/json/forecast.json");
    let query = {
      key: this.apiKey,
      q: city,
      days: amount.toString(),
      aqi: "no",
      alerts: "no"
    };
    return this.http.get<forecastWeatherResponse>(
      this.apiUrl +
        'forecast.json?' +
        new URLSearchParams(query).toString()
    );
  }
}
