import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AutoFocusModule } from '@stewie/primeng/autofocus';
import { AvatarModule } from '@stewie/primeng/avatar';
import { ButtonModule } from '@stewie/primeng/button';
import { DialogModule } from '@stewie/primeng/dialog';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { HeadlessDoc } from './headlessdoc';
import { ImportDoc } from './importdoc';
import { LongContentDoc } from './longcontentdoc';
import { MaximizableDoc } from './maximizabledoc';
import { ModalDoc } from './modaldoc';
import { OverlaysInsideDoc } from './overlaysinsidedoc';
import { PositionDoc } from './positiondoc';
import { ResponsiveDoc } from './responsivedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { WithoutModalDoc } from './withoutmodaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, DialogModule, ButtonModule, DropdownModule, AppDocModule, InputTextModule, AvatarModule, AutoFocusModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, LongContentDoc, ResponsiveDoc, PositionDoc, MaximizableDoc, TemplateDoc, OverlaysInsideDoc, ModalDoc, AccessibilityDoc, HeadlessDoc, WithoutModalDoc],
    exports: [AppDocModule]
})
export class DialogDocModule {}
