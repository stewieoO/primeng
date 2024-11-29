import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from '@stewie/primeng/avatar';
import { ButtonModule } from '@stewie/primeng/button';
import { RippleModule } from '@stewie/primeng/ripple';
import { SidebarModule } from '@stewie/primeng/sidebar';
import { StyleClassModule } from '@stewie/primeng/styleclass';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { FullScreenDoc } from './fullscreendoc';
import { HeadlessDoc } from './headlessdoc';
import { ImportDoc } from './importdoc';
import { PositionDoc } from './positiondoc';
import { SizeDoc } from './sizedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, RouterModule, SidebarModule, ButtonModule, AppDocModule, AvatarModule, RippleModule, StyleClassModule],
    declarations: [BasicDoc, TemplateDoc, ImportDoc, StyleDoc, PositionDoc, FullScreenDoc, SizeDoc, AccessibilityDoc, HeadlessDoc],
    exports: [AppDocModule]
})
export class SidebarDocModule {}
