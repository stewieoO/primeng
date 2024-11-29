import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { TagModule } from '@stewie/primeng/tag';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { IconDoc } from './icondoc';
import { ImportDoc } from './importdoc';
import { PillDoc } from './pilldoc';
import { SeverityDoc } from './severitydoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, TagModule, ButtonModule],
    declarations: [ImportDoc, BasicDoc, IconDoc, PillDoc, StyleDoc, TemplateDoc, SeverityDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class TagDocModule {}
