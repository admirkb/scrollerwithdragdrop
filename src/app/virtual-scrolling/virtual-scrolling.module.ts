import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollerComponent } from './scroller/scroller.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [ScrollerComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[ScrollerComponent]
})
export class VirtualScrollingModule { }
