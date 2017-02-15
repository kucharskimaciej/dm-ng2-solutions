import {Component, Inject} from '@angular/core';
import {IProduct} from "./models/product";
import {ISort} from "./models/sort";
import {ProductsServiceToken, IProductsService} from "./services/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';

  public products: IProduct[];
  public sort: ISort = {
    property: 'price',
    reverse: false
  };
  public predicate: string = "";

  constructor(@Inject(ProductsServiceToken) private _productsService: IProductsService) {
    this._productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }


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

