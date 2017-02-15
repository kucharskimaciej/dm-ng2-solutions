import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    private searchInput: FormControl = new FormControl("");

    @Output() search: EventEmitter<string> = new EventEmitter();

    constructor() {
      this.searchInput.valueChanges.subscribe((value: string) => {
          this.search.emit(value);
      });
    }
}
