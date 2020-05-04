import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNum'
})
export class RoundNumPipe implements PipeTransform {
  transform(value: number, isCeil): any {
    if (isCeil) {
      return Math.ceil(value);
    }
    return Math.floor(value);
  }
}
