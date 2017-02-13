class ProductComponent {
    constructor(private product: IProduct) {}

    render(): CustomElement {
        return el('div',
            el('h3', this.product.name),
            el('p', this.product.description),
            el('span', `$${this.product.price}`)
        );
    }
}

class AppComponent {
    constructor(private products: IProduct[]) {}

    render(): CustomElement {
        return el('section',
            el('div',
                el('h2', 'Promoted'),
                ...this.products.filter(product => product.promoted)
                    .map(this.renderProduct)
            ),
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
}
interface IProduct {
    name: string;
    description: string;
    price: number;
    promoted?: boolean;
}

const products: IProduct[] = [
    {
        name: 'VanillaJS',
        description: 'Best framework ever',
        price: 0
    },
    {
        name: 'TypeScript',
        description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
        price: 128
    },
    {
        name: 'Angular2',
        description: 'One framework. Mobile & desktop.',
        price: 256,
        promoted: true
    }
];

const app = new AppComponent(products);
document.body.appendChild(createElement(app.render()));



//***
type CustomElement = string | { tagName: string, children: CustomElement[] };

function el(tagName: string, ...children: CustomElement[]): CustomElement {
    return { tagName, children };
}

function createElement(node: CustomElement): HTMLElement | Text {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.tagName);
    node.children
        .map(createElement)
        .forEach(child => el.appendChild(child));

    return el;
}
