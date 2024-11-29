import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BasicDoc } from './basicdoc';
import { DataTableDoc } from './datatabledoc';
import { DragHandleDoc } from './draghandledoc';
import { DropIndicatorDoc } from './dropindicatordoc';
import { ImportDoc } from './importdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DragDropModule, TableModule, TagModule, FormsModule, PanelModule],
    declarations: [BasicDoc, DataTableDoc, ImportDoc, DropIndicatorDoc, DragHandleDoc],
    exports: [AppDocModule]
})
export class DragDropDocModule {}
