import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/skeleton/accessibilitydoc';
import { CardDoc } from '@doc/skeleton/carddoc';
import { DataTableDoc } from '@doc/skeleton/datatabledoc';
import { ImportDoc } from '@doc/skeleton/importdoc';
import { ListDoc } from '@doc/skeleton/listdoc';
import { ShapesDoc } from '@doc/skeleton/shapesdoc';
import { StyleDoc } from '@doc/skeleton/styledoc';

@Component({
    templateUrl: './skeletondemo.html',
    styleUrls: ['./skeletondemo.scss']
})
export class SkeletonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'shapes',
            label: 'Shapes',
            component: ShapesDoc
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
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
