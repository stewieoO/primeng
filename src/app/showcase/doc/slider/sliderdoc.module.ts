import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { SliderModule } from '@stewie/primeng/slider';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { InputDoc } from './inputdoc';
import { RangeDoc } from './rangedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StepDoc } from './stepdoc';
import { StyleDoc } from './styledoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, ReactiveFormsModule, SliderModule, AppDocModule, InputTextModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, InputDoc, StepDoc, RangeDoc, VerticalDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc]
})
export class SliderDocModule {}
