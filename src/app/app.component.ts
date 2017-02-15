import { Component } from '@angular/core';
import {IProduct} from "./models/product";
import {ISort} from "./models/sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';

  private allProducts: IProduct[] = [
    {
      name: "JavaScript: The Definitive Guide",
      description: `Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.`,
      price: 28.89,
      tags: ['javascript', 'guide', 'reference']
    },
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      description: `JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.`,
      price: 21.22
    },
    {
      name: "JavaScript: The Good Parts: The Good Parts",
      description: `Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.`,
      price: 16.59,
      promoted: true,
      tags: ['javascript', 'truth']
    }
  ];

  public products: IProduct[] = this.allProducts.slice();
  public sort: ISort = {
    property: 'price',
    reverse: false
  };
  public predicate: string = "";

  onFilter(predicate: string = ''): void {
    this.predicate = predicate;
  }

  onSort(sortBy: string) {
    this.sort = {
      reverse: !this.sort.reverse,
      property: sortBy
    };
  }
}

