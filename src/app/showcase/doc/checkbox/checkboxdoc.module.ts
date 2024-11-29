import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { CheckboxModule } from 'primeng/checkbox';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { DynamicDoc } from './dynamicdoc';
import { FilledDoc } from './filleddoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { LabelDoc } from './labeldoc';
import { MultipleDoc } from './multipledoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AppCodeModule, AppDocModule, CheckboxModule, ReactiveFormsModule],
    exports: [ImportDoc],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, LabelDoc, DynamicDoc, DisabledDoc, InvalidDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc]
})
export class CheckboxDocModule {}
