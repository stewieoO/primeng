import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ImageModule } from '@stewie/primeng/image';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PreviewDoc } from './previewdoc';
import { PreviewImageSourceDoc } from './previewimagesourcedoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, ImageModule, AppCodeModule, AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, PreviewDoc, PreviewImageSourceDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ImageDocModule {}
