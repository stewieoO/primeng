import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/chips/accessibilitydoc';
import { BasicDoc } from '@doc/chips/basicdoc';
import { DisabledDoc } from '@doc/chips/disableddoc';
import { FilledDoc } from '@doc/chips/filleddoc';
import { FloatLabelDoc } from '@doc/chips/floatlabeldoc';
import { ImportDoc } from '@doc/chips/importdoc';
import { InvalidDoc } from '@doc/chips/invaliddoc';
import { MaxValuesDoc } from '@doc/chips/maxvaluesdoc';
import { ReactiveFormsDoc } from '@doc/chips/reactiveformsdoc';
import { SeparatorDoc } from '@doc/chips/separatordoc';
import { StyleDoc } from '@doc/chips/styledoc';
import { TemplateDoc } from '@doc/chips/templatedoc';

@Component({
    templateUrl: './chipsdemo.html',
    standalone: false
})
export class ChipsDemo {
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
            id: 'reactive-forms',
            label: 'Reactive Forms',
            component: ReactiveFormsDoc
        },
        {
            id: 'max-values',
            label: 'Max Values',
            component: MaxValuesDoc
        },
        {
            id: 'separator',
            label: 'Separator',
            component: SeparatorDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
