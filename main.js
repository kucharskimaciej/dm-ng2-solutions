class ProductComponent {
    constructor(product) {
        this.product = product;
    }

    render() {
        return el('div',
            el('h3', this.product.name),
            el('p', this.product.description),
            el('span', `$${this.product.price}`)
        );
    }
}

class AppComponent {
    constructor(products) {
        this.products = products;
    }

    render() {
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

    renderProduct(product) {
        const cmp = new ProductComponent(product);
        return cmp.render();
    }
}

const products = [
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

function el(tagName, ...children) {
    return { tagName, children };
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.tagName);
    node.children
        .map(createElement)
        .forEach(child => el.appendChild(child));

    return el;
}
