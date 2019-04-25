import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraggerComponent } from './drag-drop/dragger/dragger.component';
import { SorterComponent } from './drag-drop/sorter/sorter.component';
import { ConnectedSorterComponent } from './drag-drop/connected-sorter/connected-sorter.component';
import { DraggerHandleMeComponent } from './drag-drop/dragger-handle-me/dragger-handle-me.component';
import { DraggerCustomPreviewComponent } from './drag-drop/dragger-custom-preview/dragger-custom-preview.component';
import { DraggerCustomPlaceholderComponent } from './drag-drop/dragger-custom-placeholder/dragger-custom-placeholder.component';
import { SorterHorizontalComponent } from './drag-drop/sorter-horizontal/sorter-horizontal.component';
import { DraggerDialogComponent } from './drag-drop/dragger-dialog/dragger-dialog.component';

const routes: Routes = [
  { path: '', component: DraggerComponent },
  { path: 'dragdrop', component: DraggerComponent },
  { path: 'sorter', component: SorterComponent },
  { path: 'connectedSorter', component: ConnectedSorterComponent },
  { path: 'draggerHandleMe', component: DraggerHandleMeComponent },
  { path: 'draggerCustomPreview', component: DraggerCustomPreviewComponent },
  { path: 'draggerCustomPlaceholder', component: DraggerCustomPlaceholderComponent },
  { path: 'sorterHorizontal', component: SorterHorizontalComponent },
  { path: 'draggerDialog', component: DraggerDialogComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
