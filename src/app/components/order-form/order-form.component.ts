import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IOrder} from "../../models/order";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

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
        name: ['', Validators.required],
        surname: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        productName: ['', Validators.required],
        productCount: [0, Validators.required]
      });
    }

    onSubmit() {
      this.data.emit(this.form.value);
    }
}
