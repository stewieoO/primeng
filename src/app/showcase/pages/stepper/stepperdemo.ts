import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/stepper/accessibilitydoc';
import { BasicDoc } from '@doc/stepper/basicdoc';
import { ImportDoc } from '@doc/stepper/importdoc';
import { LinearDoc } from '@doc/stepper/lineardoc';
import { TemplateDoc } from '@doc/stepper/templatedoc';
import { VerticalDoc } from '@doc/stepper/verticaldoc';

@Component({
    templateUrl: './stepperdemo.html'
})
export class StepperDemo {
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
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'linear',
            label: 'Linear',
            component: LinearDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
