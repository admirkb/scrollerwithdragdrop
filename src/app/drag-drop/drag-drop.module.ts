import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { DraggerComponent } from './dragger/dragger.component';
import { SorterComponent } from './sorter/sorter.component';
import { ConnectedSorterComponent } from './connected-sorter/connected-sorter.component';
import { DraggerHandleMeComponent } from './dragger-handle-me/dragger-handle-me.component';
import { DraggerCustomPreviewComponent } from './dragger-custom-preview/dragger-custom-preview.component';
import { DraggerCustomPlaceholderComponent } from './dragger-custom-placeholder/dragger-custom-placeholder.component';
import { SorterHorizontalComponent } from './sorter-horizontal/sorter-horizontal.component';
import { DraggerDialogComponent } from './dragger-dialog/dragger-dialog.component'

@NgModule({
  declarations: [DraggerComponent, SorterComponent, ConnectedSorterComponent, DraggerHandleMeComponent, DraggerCustomPreviewComponent, DraggerCustomPlaceholderComponent, SorterHorizontalComponent, DraggerDialogComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class DragDropModule { }
