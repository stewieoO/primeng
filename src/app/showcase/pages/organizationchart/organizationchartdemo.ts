import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/organizationchart/accessibilitydoc';
import { BasicDoc } from '@doc/organizationchart/basicdoc';
import { ColoredDoc } from '@doc/organizationchart/colored.doc';
import { ImportDoc } from '@doc/organizationchart/importdoc';
import { SelectionDoc } from '@doc/organizationchart/selectiondoc';
import { StyleDoc } from '@doc/organizationchart/styledoc';
import { TemplateDoc } from '@doc/organizationchart/templatedoc';

@Component({
    templateUrl: './organizationchartdemo.html',
    styleUrls: ['./organizationchartdemo.scss'],
    standalone: false
})
export class OrganizationChartDemo {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'selection',
            label: 'Selection',
            component: SelectionDoc
        },
        {
            id: 'colored',
            label: 'Colored',
            component: ColoredDoc
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
