import { Component, ViewEncapsulation } from '@angular/core';
import { AccessibilityDoc } from '@doc/scrollpanel/accessibilitydoc';
import { BasicDoc } from '@doc/scrollpanel/basicdoc';
import { CusstomDoc } from '@doc/scrollpanel/customdoc';
import { ImportDoc } from '@doc/scrollpanel/importdoc';
import { StyleDoc } from '@doc/scrollpanel/styledoc';

@Component({
    templateUrl: './scrollpaneldemo.html',
    styleUrls: ['./scrollpaneldemo.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrollPanelDemo {
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
            component: CusstomDoc
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
