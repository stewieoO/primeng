import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { RippleModule } from '@stewie/primeng/ripple';
import { TabMenuModule } from '@stewie/primeng/tabmenu';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { ActiveDoc } from './activedoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { RouterDoc } from './routerdoc';
import { ScrollableDoc } from './scrollabledoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TabMenuModule, ButtonModule, RippleModule, AppDocModule, ToastModule],
    declarations: [BasicDoc, ScrollableDoc, ImportDoc, StyleDoc, ControlledDoc, ActiveDoc, TemplateDoc, CommandDoc, RouterDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class TabMenuDocModule {}
