import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { FloatlabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { MaskDoc } from './maskdoc';
import { OptionalDoc } from './optionaldoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { SlotCharDoc } from './slotchardoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputMaskModule, RouterModule, AppCodeModule, AppDocModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MaskDoc, SlotCharDoc, OptionalDoc, FloatlabelDoc, DisabledDoc, InvalidDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc]
})
export class InputMaskDocModule {}
