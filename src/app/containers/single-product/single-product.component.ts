import {Component, OnInit, Inject} from '@angular/core';
import {IProductsService, ProductsServiceToken} from "../../services/products/products";
import {IProduct} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
    moduleId: module.id,
    selector: 'single-product',
    templateUrl: 'single-product.component.html'
})
export class SingleProductComponent {
  private product: IProduct;

  constructor(
    @Inject(ProductsServiceToken) private _productsService: IProductsService,
    private route:ActivatedRoute
  ) {
    route.params
      .map(params => Number(params['id']))
      .switchMap(id => {
        return this._productsService.getProductById(id);
      }).subscribe((product) => {
        this.product = product;
      });
  }

}
