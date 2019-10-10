import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormlistComponent } from './components/formlist/formlist.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    FormlistComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FormlistComponent]
})
export class AppModule { }
