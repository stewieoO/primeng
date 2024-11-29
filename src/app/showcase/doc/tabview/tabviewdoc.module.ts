import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from '@stewie/primeng/avatar';
import { BadgeModule } from '@stewie/primeng/badge';
import { ButtonModule } from '@stewie/primeng/button';
import { TabViewModule } from '@stewie/primeng/tabview';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ClosableDoc } from './closabledoc';
import { ControlledDoc } from './controlleddoc';
import { TemplateDoc } from './customtemplatedoc';
import { DisabledDoc } from './disableddoc';
import { DynamicDoc } from './dynamicdoc';
import { ImportDoc } from './importdoc';
import { LazyDoc } from './lazydoc';
import { ScrollableDoc } from './scrollabledoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TabViewModule, RouterModule, ButtonModule, AvatarModule, BadgeModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, ControlledDoc, DynamicDoc, DisabledDoc, TemplateDoc, ClosableDoc, ScrollableDoc, LazyDoc, StyleDoc, AccessibilityDoc]
})
export class TabViewDocModule {}
