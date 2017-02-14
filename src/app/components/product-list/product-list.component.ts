import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  @Input() products: IProduct[];
  @Input() header: string = 'Products';
}
