import {IProduct} from "./models/product";
import {AppComponent} from "./components/app.component";
import {createElement, el} from "./common";

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

const toggleButton = createElement(el('button', 'Toggle promoted'));
let appRoot = createElement(app.render());

document.body.appendChild(toggleButton);
document.body.appendChild(appRoot);

document.querySelector('button').addEventListener('click', function () {
    document.body.removeChild(appRoot);

    app.togglePromoted();
    appRoot = createElement(app.render());
    document.body.appendChild(appRoot);
});

