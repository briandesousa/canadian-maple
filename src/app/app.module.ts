import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FavoriteMapleSyrupComponent } from './favorite-maple-syrup/favorite-maple-syrup.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteMapleSyrupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
