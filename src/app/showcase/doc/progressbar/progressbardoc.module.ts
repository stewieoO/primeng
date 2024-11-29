import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ProgressBarModule } from '@stewie/primeng/progressbar';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DynamicDoc } from './dynamicdoc';
import { ImportDoc } from './importdoc';
import { IndeterminateDoc } from './indeterminatedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ProgressBarModule, ToastModule],
    declarations: [BasicDoc, DynamicDoc, ImportDoc, IndeterminateDoc, TemplateDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ProgressBarDocModule {}
