import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, PanelMenuModule, AppDocModule, ButtonModule, BadgeModule, ToastModule],
    declarations: [BasicDoc, ImportDoc, MultipleDoc, ControlledDoc, TemplateDoc, CommandDoc, StyleDoc, AccessibilityDoc, RouterDoc],
    exports: [AppDocModule]
})
export class PanelMenuDocModule {}
