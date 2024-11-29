import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/checkbox/accessibilitydoc';
import { BasicDoc } from '@doc/checkbox/basicdoc';
import { DisabledDoc } from '@doc/checkbox/disableddoc';
import { DynamicDoc } from '@doc/checkbox/dynamicdoc';
import { FilledDoc } from '@doc/checkbox/filleddoc';
import { ImportDoc } from '@doc/checkbox/importdoc';
import { InvalidDoc } from '@doc/checkbox/invaliddoc';
import { MultipleDoc } from '@doc/checkbox/multipledoc';
import { ReactiveFormsDoc } from '@doc/checkbox/reactiveformsdoc';
import { StyleDoc } from '@doc/checkbox/styledoc';

@Component({
    templateUrl: './checkboxdemo.html',
    standalone: false
})
export class CheckboxDemo {
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
            id: 'group',
            label: 'Group',
            component: MultipleDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
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
