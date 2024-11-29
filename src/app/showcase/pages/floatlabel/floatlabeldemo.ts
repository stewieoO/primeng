import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/floatlabel/accessibilitydoc';
import { BasicDoc } from '@doc/floatlabel/basicdoc';
import { ImportDoc } from '@doc/floatlabel/importdoc';
import { StyleDoc } from '@doc/floatlabel/styledoc';

@Component({
    templateUrl: './floatlabeldemo.html',
    standalone: false
})
export class FloatLabelDemo {
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
