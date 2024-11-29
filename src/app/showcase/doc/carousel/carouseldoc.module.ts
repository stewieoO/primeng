import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { CarouselModule } from '@stewie/primeng/carousel';
import { TagModule } from '@stewie/primeng/tag';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CircularDoc } from './circulardoc';
import { ImportDoc } from './importdoc';
import { NumScrollDoc } from './numscrolldoc';
import { ResponsiveDoc } from './responsivedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, CarouselModule, ButtonModule, TagModule],
    declarations: [ImportDoc, BasicDoc, CircularDoc, NumScrollDoc, StyleDoc, ResponsiveDoc, TemplateDoc, VerticalDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class CarouselDocModule {}
