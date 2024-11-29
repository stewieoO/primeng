import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ProgressSpinnerModule } from '@stewie/primeng/progressspinner';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CustomDoc } from './customdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressSpinnerModule],
    declarations: [BasicDoc, ImportDoc, CustomDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ProgressSpinnerDocModule {}
