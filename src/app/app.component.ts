import { Component } from '@angular/core';
import {IProduct} from "./models/product";
import {ISort} from "./models/sort";
import {ProductsService} from "./services/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';

  constructor(private _productsService: ProductsService) {}

  public products: IProduct[] = this._productsService.getProducts();
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

