import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterElements'
})
export class FilterElementsPipe implements PipeTransform {
    transform(items: any[], predicate: string): any[] {
      if (!items) {
        return [];
      }

      return items.filter(item => {
        const values = getValues(item)
          .map(String)
          .map(val => val.toLowerCase());


        return values.some(value => value.includes(predicate.toLowerCase()));
      });
    }
}

function getValues(object) {
  return Object.keys(object).map(key => object[key]);
}
