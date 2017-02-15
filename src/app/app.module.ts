import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
