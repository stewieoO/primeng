import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { IconFieldModule } from '@stewie/primeng/iconfield';
import { InputIconModule } from '@stewie/primeng/inputicon';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { PasswordModule } from '@stewie/primeng/password';
import { StepperModule } from '@stewie/primeng/stepper';
import { ToggleButtonModule } from '@stewie/primeng/togglebutton';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { LinearDoc } from './lineardoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, StepperModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, PasswordModule, InputIconModule, IconFieldModule, InputTextModule, ToggleButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, VerticalDoc, LinearDoc, TemplateDoc, AccessibilityDoc]
})
export class StepperDocModule {}
