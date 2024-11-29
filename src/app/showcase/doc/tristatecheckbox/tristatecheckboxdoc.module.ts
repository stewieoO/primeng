import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { TriStateCheckboxModule } from '@stewie/primeng/tristatecheckbox';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TriStateCheckboxModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, InvalidDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc]
})
export class TristatecheckboxDocModule {}
