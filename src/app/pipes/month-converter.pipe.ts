import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthConverter',
})
export class MonthConverterPipe implements PipeTransform {

  private months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    "November",
    "December"
  ];

  transform(value: string): string {
    return this.months[new Date(value).getMonth()];
  }
}
