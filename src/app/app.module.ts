import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { VirtualScrollingModule } from './virtual-scrolling/virtual-scrolling.module';
import { DragDropModule } from './drag-drop/drag-drop.module'
import { MaterialDesignModule } from './material-design/material-design.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,VirtualScrollingModule, MaterialDesignModule, DragDropModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
