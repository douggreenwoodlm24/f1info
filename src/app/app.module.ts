import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriverItemsComponent } from './driver-items/driver-items.component';
import { SearchDriversPipe } from './search-drivers.pipe';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverItemsComponent,
    SearchDriversPipe,
    DriverDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
