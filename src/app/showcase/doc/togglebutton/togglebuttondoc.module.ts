import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ToggleButtonModule } from '@stewie/primeng/togglebutton';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CustomizedDoc } from './customizeddoc';
import { DisabledDoc } from './disableddoc';
import { ImportDoc } from './importdoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToggleButtonModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, CustomizedDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, DisabledDoc]
})
export class ToggleButtonDocModule {}
