import { Component, Input } from '@angular/core';
import { Forecastday } from 'src/app/responses/weather';
import { DayManipulatorService } from 'src/app/services/day-manipulator/day-manipulator.service';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.css']
})
export class DaySelectorComponent {

  @Input() forecastDays: Forecastday[] | undefined;

  constructor(private mainService: DayManipulatorService) {

  }

  buttonSelected(index: number) {
    this.mainService.selectDay(index);
  }

  isButtonSelected(index: number): boolean {
    return this.mainService.selectedDay == index;
  }
}
