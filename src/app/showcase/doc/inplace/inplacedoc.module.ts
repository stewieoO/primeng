import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DataDoc } from './datadoc';
import { ImageDoc } from './imagedoc';
import { ImportDoc } from './importdoc';
import { InputDoc } from './inputdoc';
import { LazyDoc } from './lazydoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InplaceModule, InputTextModule, TableModule],
    declarations: [BasicDoc, DataDoc, ImageDoc, ImportDoc, InputDoc, StyleDoc, LazyDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class InplaceDocModule {}
