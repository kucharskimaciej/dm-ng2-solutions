import { Component, OnInit } from '@angular/core';
import {IOrder} from "../../models/order";

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html'
})
export class OrderComponent {
  onData(order: IOrder) {
    console.log(order);
  }
}
