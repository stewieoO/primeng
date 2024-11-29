import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AnimateOnScrollModule } from '@stewie/primeng/animateonscroll';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, AnimateOnScrollModule],
    declarations: [ImportDoc, BasicDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class AnimateOnScrollDocModule {}
