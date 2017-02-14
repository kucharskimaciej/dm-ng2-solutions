import {IProduct} from "../models/product";
import {CustomElement, el} from "../common";
import {ProductComponent} from "./product.component";

export class AppComponent {
    private showPromoted: boolean = true;

    constructor(private products: IProduct[]) {}

    render(): CustomElement {
        return el('section',
            this.showPromoted ?
                el('div',
                    el('h2', 'Promoted'),
                    ...this.products.filter(product => product.promoted)
                        .map(this.renderProduct)
                ) : null,
            el('div',
                el('h2', 'Regular'),
                ...this.products.filter(product => !product.promoted)
                    .map(this.renderProduct)
            )
        );
    }

    renderProduct(product: IProduct): CustomElement {
        const cmp = new ProductComponent(product);
        return cmp.render();
    }

    togglePromoted() {
        this.showPromoted = !this.showPromoted;
    }
}