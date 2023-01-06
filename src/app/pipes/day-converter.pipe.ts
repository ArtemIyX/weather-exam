import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayConverter'
})
export class DayConverterPipe implements PipeTransform {

  private days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  transform(value: string): string {
    return this.days[new Date(value).getDay()];
  }

}
