import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processNull'
})
export class ProcessNullPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) {
      value = args;
    }
    return value;
  }

}
