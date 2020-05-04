import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrange'
})
export class ArrangePipe implements PipeTransform {

  transform(users: any[], type: string): any {
    // code loi
    // if (typeof users[0][type] === 'number') {
    //   return users.sort((a: any, b: any) => a[type] - b[type]);
    // }
    // return users.sort();
    return users.sort((a: any, b: any): number => {
      if (typeof a[type] === 'number') {
        return a[type] - b[type];
      }
      return (a[type] as string).localeCompare(b[type]);
    });
  }

}
