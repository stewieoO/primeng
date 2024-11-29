import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/fieldset/accessibilitydoc';
import { BasicDoc } from '@doc/fieldset/basicdoc';
import { ImportDoc } from '@doc/fieldset/importdoc';
import { StyleDoc } from '@doc/fieldset/styledoc';
import { TemplateDoc } from '@doc/fieldset/templatedoc';
import { ToggleableDoc } from '@doc/fieldset/toggleabledoc';

@Component({
    templateUrl: './fieldsetdemo.html',
    standalone: false
})
export class FieldsetDemo {
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
