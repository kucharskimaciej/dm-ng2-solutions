import {IProduct} from "../models/product";
import {CustomElement, el} from "../common";

export class ProductComponent {
    constructor(private product: IProduct) {}

    render(): CustomElement {
        return el('div',
            el('h3', this.product.name),
            el('p', this.product.description),
            el('span', `$${this.product.price}`)
        );
    }
}