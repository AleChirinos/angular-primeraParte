import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToDate'
})
export class StrToDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}