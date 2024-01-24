import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'dateTimePipe'
})
export class DateTimePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var region = localStorage.getItem('selectedLanguage') ?? environment.defaultLanguage;
    return (new Date(value + '')).toLocaleString(region);
  }

}
