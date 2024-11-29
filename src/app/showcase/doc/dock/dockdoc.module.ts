import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { DialogModule } from '@stewie/primeng/dialog';
import { DockModule } from '@stewie/primeng/dock';
import { GalleriaModule } from '@stewie/primeng/galleria';
import { MenubarModule } from '@stewie/primeng/menubar';
import { RadioButtonModule } from '@stewie/primeng/radiobutton';
import { TerminalModule } from '@stewie/primeng/terminal';
import { ToastModule } from '@stewie/primeng/toast';
import { TreeModule } from '@stewie/primeng/tree';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
