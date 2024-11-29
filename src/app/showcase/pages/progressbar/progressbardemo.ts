import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/progressbar/accessibilitydoc';
import { BasicDoc } from '@doc/progressbar/basicdoc';
import { DynamicDoc } from '@doc/progressbar/dynamicdoc';
import { ImportDoc } from '@doc/progressbar/importdoc';
import { IndeterminateDoc } from '@doc/progressbar/indeterminatedoc';
import { StyleDoc } from '@doc/progressbar/styledoc';
import { TemplateDoc } from '@doc/progressbar/templatedoc';

@Component({
    templateUrl: './progressbardemo.html'
})
export class ProgressBarDemo {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
