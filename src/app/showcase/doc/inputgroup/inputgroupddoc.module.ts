import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { CheckboxModule } from '@stewie/primeng/checkbox';
import { InputGroupModule } from '@stewie/primeng/inputgroup';
import { InputGroupAddonModule } from '@stewie/primeng/inputgroupaddon';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { RadioButtonModule } from '@stewie/primeng/radiobutton';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, InputGroupModule, InputGroupAddonModule, RadioButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc, AccessibilityDoc]
})
export class InputGroupDocModule {}
