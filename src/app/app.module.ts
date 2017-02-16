import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SearchComponent} from "./components/search/search.component";
import {SortButtonComponent} from "./components/sort-button/sort-button.component";
import {FilterElementsPipe} from "./pipes/filterElements";
import {SortElementsPipe} from "./pipes/sortElements";
import {ProductsServiceToken, ProductsJSONService} from "./services/products";
import {OrderFormComponent} from "./components/order-form/order-form.component";

@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,
    ProductListComponent,
    SearchComponent,
    SortButtonComponent,
    OrderFormComponent,

    FilterElementsPipe,
    SortElementsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{
    provide: ProductsServiceToken,
    useClass: ProductsJSONService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
