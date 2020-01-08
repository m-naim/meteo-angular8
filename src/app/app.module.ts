import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CelsiusPipe } from './celsius.pipe';
import { IconPipe } from './icon.pipe';
import { CardPipe } from './card.pipe';


@NgModule({
  declarations: [
    AppComponent, CelsiusPipe, IconPipe, CardPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
