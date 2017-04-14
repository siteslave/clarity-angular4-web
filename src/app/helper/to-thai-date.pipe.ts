import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toThaiDate'
})
export class ToThaiDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (moment(value, 'YYYY-MM-DD').isValid()) {
      const thaiDate = `${moment(value).format('DD/MM')}/ ${moment(value).get('year') + 543}`;
      return thaiDate;
    } else {
      return '-';
    }
  }

}
