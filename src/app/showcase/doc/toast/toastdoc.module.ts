import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from '@stewie/primeng/avatar';
import { ButtonModule } from '@stewie/primeng/button';
import { ProgressBarModule } from '@stewie/primeng/progressbar';
import { RippleModule } from '@stewie/primeng/ripple';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { AnimationDoc } from './animationdoc';
import { BasicDoc } from './basicdoc';
import { ClearDoc } from './cleardoc';
import { HeadlessDoc } from './headlessdoc';
import { ImportDoc } from './importdoc';
import { LifeDoc } from './lifedoc';
import { MultipleDoc } from './multipledoc';
import { PositionDoc } from './positiondoc';
import { ResponsiveDoc } from './responsivedoc';
import { SeverityDoc } from './severitydoc';
import { StickyDoc } from './stickydoc';
import { StyleDoc } from './styledoc';
import { TargetDoc } from './targetdoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ToastModule, ButtonModule, RippleModule, AvatarModule, ProgressBarModule],
    declarations: [AnimationDoc, BasicDoc, ImportDoc, MultipleDoc, PositionDoc, ResponsiveDoc, SeverityDoc, LifeDoc, StickyDoc, StyleDoc, TargetDoc, TemplateDoc, ClearDoc, HeadlessDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ToastDocModule {}
