import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/overlaypanel/accessibilitydoc';
import { BasicDoc } from '@doc/overlaypanel/basicdoc';
import { DataTableDoc } from '@doc/overlaypanel/datatabledoc';
import { ImportDoc } from '@doc/overlaypanel/importdoc';
import { StyleDoc } from '@doc/overlaypanel/styledoc';

@Component({
    templateUrl: './overlaypaneldemo.html',
    standalone: false
})
export class OverlayPanelDemo {
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
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDoc
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
