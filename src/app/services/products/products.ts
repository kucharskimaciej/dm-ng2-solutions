import {Injectable, OpaqueToken} from '@angular/core';
import {IProduct} from "../../models/product";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/take";

export interface IProductsService {
  getProducts(): Observable<IProduct[]>;
  getProductById(id: number): Observable<IProduct>;
}

@Injectable()
export class ProductsInMemoryService implements IProductsService {
  getProducts() {
    return Observable.of([
      {
        "id": 1,
        "name": "JavaScript: The Definitive Guide",
        "description": "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.",
        "price": 28.89,
        "tags": [
          "javascript",
          "guide",
          "reference"
        ]
      },
      {
        "id": 2,
        "name": "Eloquent JavaScript: A Modern Introduction to Programming",
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "price": 21.22
      },
      {
        "id": 3,
        "name": "JavaScript: The Good Parts: The Good Parts",
        "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.",
        "price": 16.59,
        "promoted": true,
        "tags": [
          "javascript",
          "truth"
        ]
      }
    ]);
  }

  getProductById(id: number) {
    return this.getProducts().map(products => {
      const requestedProduct = products.find(p => p.id === id);

      return requestedProduct
    });
  }
}

@Injectable()
export class ProductsJSONService implements IProductsService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get('products.json')
      .retryWhen(err => err.delay(1000).take(5))
      .map(response => response.json());
  }

  getProductById(id: number) {
    return this.getProducts().map(products => {
      const requestedProduct = products.find(p => p.id === id);

      return requestedProduct;
    });
  }
}

export const ProductsServiceToken = new OpaqueToken('ProductsService');
