import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';



@NgModule({
  declarations: [
  ProductlistComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductlistComponent]
 
})
export class AppModule { }
