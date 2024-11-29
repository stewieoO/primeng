import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/panel/accessibilitydoc';
import { BasicDoc } from '@doc/panel/basicdoc';
import { ImportDoc } from '@doc/panel/importdoc';
import { StyleDoc } from '@doc/panel/styledoc';
import { TemplateDoc } from '@doc/panel/templatedoc';
import { ToggleableDoc } from '@doc/panel/toggleabledoc';

@Component({
    templateUrl: './paneldemo.html',
    standalone: false
})
export class PanelDemo {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
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
