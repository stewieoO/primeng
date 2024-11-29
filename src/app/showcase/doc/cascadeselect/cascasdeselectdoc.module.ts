import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { CascadeSelectModule } from '@stewie/primeng/cascadeselect';
import { FloatLabelModule } from '@stewie/primeng/floatlabel';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { LoadingDoc } from './loadingdoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, CascadeSelectModule, FormsModule, AppCodeModule, AppDocModule, ReactiveFormsModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, InvalidDoc, FloatLabelDoc, FilledDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, LoadingDoc]
})
export class CascadeSelectDocModule {}
