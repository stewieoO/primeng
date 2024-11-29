import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/orderlist/accessibilitydoc';
import { BasicDoc } from '@doc/orderlist/basicdoc';
import { DragDropDoc } from '@doc/orderlist/dragdropdoc';
import { FilterDoc } from '@doc/orderlist/filterdoc';
import { ImportDoc } from '@doc/orderlist/importdoc';
import { StyleDoc } from '@doc/orderlist/styledoc';

@Component({
    templateUrl: './orderlistdemo.html',
    styleUrls: ['./orderlistdemo.scss']
})
export class OrderListDemo {
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
            id: 'dragdrop',
            label: 'DragDrop',
            component: DragDropDoc
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
