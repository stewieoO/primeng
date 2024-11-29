import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { DividerModule } from '@stewie/primeng/divider';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { PaginatorModule } from '@stewie/primeng/paginator';
import { SliderModule } from '@stewie/primeng/slider';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CurrentPageReportDoc } from './currentpagereportdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { LocaleDoc } from './localedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, SliderModule, RouterModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, AccessibilityDoc, LocaleDoc, CurrentPageReportDoc]
})
export class PaginatorDocModule {}
