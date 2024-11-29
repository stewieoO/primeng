import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/progressspinner/accessibilitydoc';
import { BasicDoc } from '@doc/progressspinner/basicdoc';
import { CustomDoc } from '@doc/progressspinner/customdoc';
import { ImportDoc } from '@doc/progressspinner/importdoc';
import { StyleDoc } from '@doc/progressspinner/styledoc';

@Component({
    templateUrl: './progressspinnerdemo.html',
    styleUrls: ['./progressspinnerdemo.css'],
    standalone: false
})
export class ProgressSpinnerDemo {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
