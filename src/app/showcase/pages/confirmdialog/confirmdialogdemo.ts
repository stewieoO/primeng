import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/confirmdialog/accessibilitydoc';
import { BasicDoc } from '@doc/confirmdialog/basicdoc';
import { HeadlessDoc } from '@doc/confirmdialog/headlessdoc';
import { ImportDoc } from '@doc/confirmdialog/importdoc';
import { PositionDoc } from '@doc/confirmdialog/positiondoc';
import { StyleDoc } from '@doc/confirmdialog/styledoc';
import { TemplateDoc } from '@doc/confirmdialog/templatedoc';

@Component({
    templateUrl: './confirmdialogdemo.html'
})
export class ConfirmDialogDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'headless',
            label: 'Headless',
            component: HeadlessDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
