import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ChipsModule } from '@stewie/primeng/chips';
import { FloatLabelModule } from '@stewie/primeng/floatlabel';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { MaxValuesDoc } from './maxvaluesdoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { RegexpSeparatorDoc } from './regexpseparator.doc';
import { SeparatorDoc } from './separatordoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, ChipsModule, FormsModule, RouterModule, ReactiveFormsModule, AppCodeModule, AppDocModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, SeparatorDoc, RegexpSeparatorDoc, TemplateDoc, FloatLabelDoc, FilledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, MaxValuesDoc, InvalidDoc, DisabledDoc]
})
export class ChipsDocModule {}
