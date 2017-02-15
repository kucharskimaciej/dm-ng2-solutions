import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ISort} from "../../models/sort";

@Component({
    moduleId: module.id,
    selector: 'sort-button',
    templateUrl: 'sort-button.component.html'
})
export class SortButtonComponent {
  @Input() property: string;
  @Input() sort: ISort;

  @Output() sortChange: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.sortChange.emit(this.property);
  }
}
