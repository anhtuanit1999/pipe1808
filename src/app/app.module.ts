import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundNumPipe } from './round-num.pipe';
import { ArrangePipe } from './arrange.pipe';
import { FilteragePipe } from './filterage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoundNumPipe,
    ArrangePipe,
    FilteragePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
