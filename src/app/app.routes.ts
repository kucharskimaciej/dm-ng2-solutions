import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./containers/products/products.component";
import {OrderComponent} from "./containers/order/order.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'order', component: OrderComponent }
];

export default RouterModule.forRoot(routes);
