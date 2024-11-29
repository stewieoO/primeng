import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { BlockUIModule } from '@stewie/primeng/blockui';
import { ButtonModule } from '@stewie/primeng/button';
import { PanelModule } from '@stewie/primeng/panel';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DocumentDoc } from './documentdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, PanelModule, ButtonModule, BlockUIModule],
    declarations: [ImportDoc, BasicDoc, DocumentDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class BlockUIDocModule {}
