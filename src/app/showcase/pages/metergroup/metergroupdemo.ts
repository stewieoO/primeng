import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/metergroup/accessibilitydoc';
import { BasicDoc } from '@doc/metergroup/basicdoc';
import { IconDoc } from '@doc/metergroup/icondoc';
import { ImportDoc } from '@doc/metergroup/importdoc';
import { LabelDoc } from '@doc/metergroup/labeldoc';
import { MinMaxDoc } from '@doc/metergroup/minmaxdoc';
import { MultipleDoc } from '@doc/metergroup/multipledoc';
import { StyleDoc } from '@doc/metergroup/styledoc';
import { TemplateDoc } from '@doc/metergroup/templatedoc';
import { VerticalDoc } from '@doc/metergroup/verticaldoc';

@Component({
    templateUrl: './metergroupdemo.html',
    standalone: false
})
export class MeterGroupDemo {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'label',
            label: 'Label',
            component: LabelDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'minmax',
            label: 'Min Max',
            component: MinMaxDoc
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
