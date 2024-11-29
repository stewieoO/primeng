import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { KnobModule } from '@stewie/primeng/knob';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ColorDoc } from './colordoc';
import { DisabledDoc } from './disableddoc';
import { ImportDoc } from './importdoc';
import { MinMaxDoc } from './minmaxdoc';
import { ReactiveDoc } from './reactivedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { ReadonlyDoc } from './readonlydoc';
import { SizeDoc } from './sizedoc';
import { StepDoc } from './stepdoc';
import { StrokeDoc } from './strokedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, AppCodeModule, AppDocModule, KnobModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MinMaxDoc, StepDoc, TemplateDoc, StrokeDoc, SizeDoc, ColorDoc, ReadonlyDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, ReactiveDoc]
})
export class KnobDocModule {}
