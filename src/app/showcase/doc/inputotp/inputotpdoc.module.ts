import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { IntegerOnlyDoc } from './integeronlydoc';
import { MaskDoc } from './maskdoc';
import { SampleDoc } from './sampledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ReactiveFormsModule, InputOtpModule, InputTextModule, ButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MaskDoc, IntegerOnlyDoc, TemplateDoc, SampleDoc, AccessibilityDoc]
})
export class InputOtpDocModule {}
