class ProductComponent {
    constructor(product) {
        this.product = product;
    }

    render() {
        const container = document.createElement('div');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('span');

        name.textContent = this.product.name;
        description.textContent = this.product.description;
        price.textContent = `$${this.product.price}`;

        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(price);

        return container;
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
        price: 256
    }
];

products.forEach(product => {
    const component = new ProductComponent(product);
    document.body.appendChild(component.render());
});

