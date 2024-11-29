import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { OrderListModule } from '@stewie/primeng/orderlist';
import { TagModule } from '@stewie/primeng/tag';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DragDropDoc } from './dragdropdoc';
import { FilterDoc } from './filterdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, OrderListModule, RouterModule, TagModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, FilterDoc, DragDropDoc, StyleDoc, AccessibilityDoc]
})
export class OrderlistDocModule {}
