import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPip',
})
export class CustomPipPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase().split('').reverse().join('');
  }

}
