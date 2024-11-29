import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/ripple/accessibilitydoc';
import { CustomDoc } from '@doc/ripple/customdoc';
import { DefaultDoc } from '@doc/ripple/defaultdoc';
import { ImportDoc } from '@doc/ripple/importdoc';
import { StyleDoc } from '@doc/ripple/styledoc';

@Component({
    templateUrl: './rippledemo.html',
    styleUrls: ['./rippledemo.scss'],
    standalone: false
})
export class RippleDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDoc
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
