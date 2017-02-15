import { Pipe, PipeTransform } from '@angular/core';
import {ISort} from "../models/sort";
import * as _ from 'lodash';

@Pipe({
    name: 'sortElements'
})
export class SortElementsPipe implements PipeTransform {
    transform(items: any[], sort: ISort): any[] {
      const sortedItems = _.sortBy(items, sort.property);

      if (sort.reverse) {
        sortedItems.reverse();
      }

      return sortedItems;
    }
}
