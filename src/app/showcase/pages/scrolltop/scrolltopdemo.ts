import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/scrolltop/accessibilitydoc';
import { BasicDoc } from '@doc/scrolltop/basicdoc';
import { ElementDoc } from '@doc/scrolltop/elementdoc';
import { ImportDoc } from '@doc/scrolltop/importdoc';
import { StyleDoc } from '@doc/scrolltop/styledoc';

@Component({
    templateUrl: './scrolltopdemo.html',
    styleUrls: ['./scrolltopdemo.scss']
})
export class ScrollTopDemo {
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
            id: 'element',
            label: 'Target Element',
            component: ElementDoc
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
