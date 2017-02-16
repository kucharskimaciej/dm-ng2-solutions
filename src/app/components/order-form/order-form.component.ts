import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IOrder} from "../../models/order";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'order-form',
    templateUrl: 'order-form.component.html'
})
export class OrderFormComponent {
    @Output() data: EventEmitter<IOrder> = new EventEmitter();

    form: FormGroup;
    constructor(fb: FormBuilder) {
      this.form = fb.group({
        name: '',
        surname: '',
        address: '',
        email: '',
        productName: '',
        productCount: 0
      });
    }

    onSubmit() {
      this.data.emit(this.form.value);
    }
}
