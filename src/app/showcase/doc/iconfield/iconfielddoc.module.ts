import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'src/app/components/iconfield/iconfield';
import { InputIconModule } from 'src/app/components/inputicon/inputicon';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, AccessibilityDoc, StyleDoc],
    exports: [AppDocModule]
})
export class IconFieldDocModule {}
