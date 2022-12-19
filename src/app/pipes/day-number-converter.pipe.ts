import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayNumberConverter'
})
export class DayNumberConverterPipe implements PipeTransform {

  transform(value: string): number  {
    return new Date(value).getDate();
  }

}
