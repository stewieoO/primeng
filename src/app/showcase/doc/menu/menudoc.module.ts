import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from '@stewie/primeng/avatar';
import { BadgeModule } from '@stewie/primeng/badge';
import { ButtonModule } from '@stewie/primeng/button';
import { MenuModule } from '@stewie/primeng/menu';
import { RippleModule } from '@stewie/primeng/ripple';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, RippleModule, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, TemplateDoc, GroupDoc, ImportDoc, RouterDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
