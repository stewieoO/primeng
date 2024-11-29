import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/confirmpopup/accessibilitydoc';
import { BasicDoc } from '@doc/confirmpopup/basicdoc';
import { HeadlessDoc } from '@doc/confirmpopup/headlessdoc';
import { ImportDoc } from '@doc/confirmpopup/importdoc';
import { StyleDoc } from '@doc/confirmpopup/styledoc';
import { TemplateDoc } from '@doc/confirmpopup/templatedoc';

@Component({
    templateUrl: './confirmpopupdemo.html'
})
export class ConfirmPopupDemo {
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
