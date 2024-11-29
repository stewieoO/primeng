import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { ChipsModule } from '@stewie/primeng/chips';
import { InputGroupModule } from '@stewie/primeng/inputgroup';
import { InputGroupAddonModule } from '@stewie/primeng/inputgroupaddon';
import { OverlayPanelModule } from '@stewie/primeng/overlaypanel';
import { TableModule } from '@stewie/primeng/table';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DataTableDoc } from './datatabledoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TargetDoc } from './targetdoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule, InputGroupModule, InputGroupAddonModule, ChipsModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, DataTableDoc, TemplateDoc, TargetDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
