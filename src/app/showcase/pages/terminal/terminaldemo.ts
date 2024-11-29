import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/terminal/accessibilitydoc';
import { BasicDoc } from '@doc/terminal/basicdoc';
import { ImportDoc } from '@doc/terminal/importdoc';
import { StyleDoc } from '@doc/terminal/styledoc';

@Component({
    templateUrl: './terminaldemo.html'
})
export class TerminalDemo {
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
