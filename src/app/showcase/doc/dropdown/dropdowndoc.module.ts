import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { FloatLabelModule } from '@stewie/primeng/floatlabel';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CheckmarkDoc } from './checkmarkdoc';
import { ClearIconDoc } from './clearicondoc';
import { CustomFilterDoc } from './customfilterdoc';
import { DisabledDoc } from './disableddoc';
import { EditableDoc } from './editabledoc';
import { FilledDoc } from './filleddoc';
import { FilterDoc } from './filterdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { LazyVirtualScrollDoc } from './lazyvirtualscrolldoc';
import { LoadingStateDoc } from './loadingstatedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VirtualScrollDoc } from './virtualscrolldoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [
        ImportDoc,
        BasicDoc,
        EditableDoc,
        GroupDoc,
        TemplateDoc,
        DisabledDoc,
        InvalidDoc,
        VirtualScrollDoc,
        LazyVirtualScrollDoc,
        CustomFilterDoc,
        FilterDoc,
        FloatLabelDoc,
        StyleDoc,
        AccessibilityDoc,
        ReactiveFormsDoc,
        CheckmarkDoc,
        ClearIconDoc,
        LoadingStateDoc,
        FilledDoc
    ]
})
export class DropdownDocModule {}
