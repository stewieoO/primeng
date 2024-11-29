import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { CardModule } from '@stewie/primeng/card';
import { TimelineModule } from '@stewie/primeng/timeline';
import { AccessibilityDoc } from './accessibilitydoc';
import { AlignmentDoc } from './alignmentdoc';
import { BasicDoc } from './basicdoc';
import { HorizontalDoc } from './horizontaldoc';
import { ImportDoc } from './importdoc';
import { OppositeDoc } from './oppositedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TimelineModule, CardModule, ButtonModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, AlignmentDoc, OppositeDoc, TemplateDoc, HorizontalDoc, StyleDoc, AccessibilityDoc]
})
export class TimelineDocModule {}
