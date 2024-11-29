import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from '@stewie/primeng/avatar';
import { ButtonModule } from '@stewie/primeng/button';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { SplitButtonModule } from '@stewie/primeng/splitbutton';
import { ToolbarModule } from '@stewie/primeng/toolbar';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
