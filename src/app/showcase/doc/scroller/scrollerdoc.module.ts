import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { ScrollerModule } from '@stewie/primeng/scroller';
import { SkeletonModule } from '@stewie/primeng/skeleton';
import { SpinnerModule } from '@stewie/primeng/spinner';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DelayDoc } from './delaydoc';
import { GridDoc } from './griddoc';
import { HorizontalDoc } from './horizontaldoc';
import { ImportDoc } from './importdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { LoaderDoc } from './loaderdoc';
import { ProgrammaticDoc } from './programmaticdoc';
import { ScrollOptionsDoc } from './scrolloptionsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ScrollerModule, SkeletonModule, SpinnerModule, ButtonModule],
    declarations: [BasicDoc, DelayDoc, ImportDoc, HorizontalDoc, GridDoc, LazyLoadDoc, LoaderDoc, ScrollOptionsDoc, StyleDoc, TemplateDoc, ProgrammaticDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ScrollerDocModule {}
