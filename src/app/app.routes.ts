import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./containers/products/products.component";
import {OrderComponent} from "./containers/order/order.component";
import {SingleProductComponent} from "./containers/single-product/single-product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'products/:id', component: SingleProductComponent }
];

export default RouterModule.forRoot(routes);
