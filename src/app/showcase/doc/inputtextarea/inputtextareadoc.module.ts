import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AccessibilityDoc } from './accessibilitydoc';
import { AutoResizeDoc } from './autoresizedoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { FloatlabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { KeyfilterDoc } from './keyfilterdoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, InputTextModule, FormsModule, ReactiveFormsModule, InputTextareaModule, AppDocModule, KeyFilterModule, FloatLabelModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, AutoResizeDoc, FloatlabelDoc, InvalidDoc, DisabledDoc, KeyfilterDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc]
})
export class InputtextareaDocModule {}
