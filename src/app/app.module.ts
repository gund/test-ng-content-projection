import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HasInnerComponent } from './has-inner/has-inner.component';
import { WrapperTplComponent } from './wrapper-tpl/wrapper-tpl.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    InnerComponent,
    HasInnerComponent,
    WrapperTplComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
