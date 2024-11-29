import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/radiobutton/accessibilitydoc';
import { DisabledDoc } from '@doc/radiobutton/disableddoc';
import { DynamicDoc } from '@doc/radiobutton/dynamicdoc';
import { FilledDoc } from '@doc/radiobutton/filleddoc';
import { GroupDoc } from '@doc/radiobutton/groupdoc';
import { ImportDoc } from '@doc/radiobutton/importdoc';
import { InvalidDoc } from '@doc/radiobutton/invaliddoc';
import { ReactiveFormsDoc } from '@doc/radiobutton/reactiveformsdoc';
import { StyleDoc } from '@doc/radiobutton/styledoc';

@Component({
    templateUrl: './radiobuttondemo.html',
    standalone: false
})
export class RadioButtonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'reactive-forms',
            label: 'Reactive Forms',
            component: ReactiveFormsDoc
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
