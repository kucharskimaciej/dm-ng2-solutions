import {ProductsInMemoryService, IProductsService} from './products';
import {Observable} from "rxjs";

describe("ProductsInMemoryService", () => {
    let service: IProductsService;

    beforeEach(function() {
      service = new ProductsInMemoryService();
    });

    describe('#getProducts', () => {
      it('returns an observable', () => {
          const result = service.getProducts();

          expect(result instanceof Observable).toBeTruthy();
      });

      it('has 3 products', () => {
        service.getProducts().subscribe(products => {
          expect(products.length).toEqual(3);
        })
      });
    });
});
