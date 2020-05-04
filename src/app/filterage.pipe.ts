import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterage'
})
export class FilteragePipe implements PipeTransform {

  transform(users: any[], age): any {
    return users.filter(user => user.age > age);
  }

}
