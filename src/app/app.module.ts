import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { VirtualScrollingModule } from './virtual-scrolling/virtual-scrolling.module';
import { MaterialDesignModule } from './material-design/material-design.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,VirtualScrollingModule, MaterialDesignModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
