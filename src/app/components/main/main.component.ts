import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpInfo } from 'src/app/responses/ipInfo';
import { Forecast, Forecastday, forecastWeatherResponse } from 'src/app/responses/weather';
import { DayManipulatorService } from 'src/app/services/day-manipulator/day-manipulator.service';
import { IpInfoService } from 'src/app/services/ip-info/ip-info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLoaded: boolean = false;

  constructor(private mainService: DayManipulatorService,
    private ipInfoService: IpInfoService) {}

  ngOnInit(): void {
    this.mainService.onForecastLoaded.subscribe(this.forecastLoaded.bind(this));
    this.ipInfoService.getIpInfo().subscribe(this.ipInfoReceievd.bind(this));
  }

  ipInfoReceievd(ip: IpInfo) {
    console.log("Region name: " + ip.regionName);
    this.mainService.loadForecast(ip.regionName);
  }
  
  forecastLoaded(forecast: forecastWeatherResponse): void {
    this.isLoaded = true;
    console.log("forecastLoaded()");
  }

  getForecastResponse(): forecastWeatherResponse {
    return this.mainService.forecast!;
  }


  getSelectedForecastDay(): Forecastday {
    return this.mainService.forecast!.forecast.forecastday[this.mainService.selectedDay];
  }

  isReady(): boolean{
    return this.isLoaded;
  }
}
