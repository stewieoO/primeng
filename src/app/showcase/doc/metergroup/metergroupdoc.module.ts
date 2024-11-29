import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { CardModule } from '@stewie/primeng/card';
import { MeterGroupModule } from '@stewie/primeng/metergroup';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { IconDoc } from './icondoc';
import { ImportDoc } from './importdoc';
import { LabelDoc } from './labeldoc';
import { MinMaxDoc } from './minmaxdoc';
import { MultipleDoc } from './multipledoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, ButtonModule, AppDocModule, MeterGroupModule, CardModule],
    declarations: [BasicDoc, ImportDoc, MultipleDoc, IconDoc, LabelDoc, VerticalDoc, MinMaxDoc, TemplateDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MeterGroupDocModule {}
