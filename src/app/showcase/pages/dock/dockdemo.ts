import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/dock/accessibilitydoc';
import { AdvancedDoc } from '@doc/dock/advanceddoc';
import { BasicDoc } from '@doc/dock/basicdoc';
import { ImportDoc } from '@doc/dock/importdoc';
import { StyleDoc } from '@doc/dock/styledoc';

@Component({
    templateUrl: './dockdemo.html',
    styleUrls: ['./dockdemo.scss'],
    standalone: false
})
export class DockDemo {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
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
