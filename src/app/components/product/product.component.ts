import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html'
})
export class ProductComponent {
  @Input() product: IProduct;
}
