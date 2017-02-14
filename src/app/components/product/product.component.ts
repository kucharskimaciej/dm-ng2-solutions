import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html',
    styles: [`.label { margin-right: 3px; }`]
})
export class ProductComponent {
  @Input() product: IProduct;
}
