import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/animateonscroll/accessibilitydoc';
import { BasicDoc } from '@doc/animateonscroll/basicdoc';
import { ImportDoc } from '@doc/animateonscroll/importdoc';

@Component({
    templateUrl: './animateonscrolldemo.html',
    standalone: false
})
export class AnimateOnScrollDemo {
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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
