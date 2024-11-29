import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/splitter/accessibilitydoc';
import { HorizontalDoc } from '@doc/splitter/horizontaldoc';
import { ImportDoc } from '@doc/splitter/importdoc';
import { NestedDoc } from '@doc/splitter/nesteddoc';
import { SizeDoc } from '@doc/splitter/sizedoc';
import { StyleDoc } from '@doc/splitter/styledoc';
import { VerticalDoc } from '@doc/splitter/verticaldoc';

@Component({
    templateUrl: './splitterdemo.html',
    standalone: false
})
export class SplitterDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
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
