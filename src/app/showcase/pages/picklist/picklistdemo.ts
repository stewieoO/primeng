import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/picklist/accessibilitydoc';
import { BasicDoc } from '@doc/picklist/basicdoc';
import { FilterDoc } from '@doc/picklist/filterdoc';
import { ImportDoc } from '@doc/picklist/importdoc';
import { StyleDoc } from '@doc/picklist/styledoc';

@Component({
    templateUrl: './picklistdemo.html',
    styleUrls: ['./picklistdemo.scss'],
    standalone: false
})
export class PickListDemo {
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
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
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
