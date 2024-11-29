import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CustomToolbarDoc } from './customtoolbardoc';
import { ImportDoc } from './importdoc';
import { QuillDoc } from './quilldoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { ReadOnlyDoc } from './readonlydoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, EditorModule, FormsModule, DropdownModule, ReactiveFormsModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, QuillDoc, BasicDoc, ReadOnlyDoc, CustomToolbarDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc]
})
export class EditorDocModule {}
