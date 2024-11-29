import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/toolbar/accessibilitydoc';
import { BasicDoc } from '@doc/toolbar/basicdoc';
import { ImportDoc } from '@doc/toolbar/importdoc';
import { StyleDoc } from '@doc/toolbar/styledoc';
import { TemplateDoc } from '@doc/toolbar/templatedoc';

@Component({
    templateUrl: './toolbardemo.html'
})
export class ToolbarDemo {
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
