import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/togglebutton/accessibilitydoc';
import { BasicDoc } from '@doc/togglebutton/basicdoc';
import { CustomizedDoc } from '@doc/togglebutton/customizeddoc';
import { DisabledDoc } from '@doc/togglebutton/disableddoc';
import { ImportDoc } from '@doc/togglebutton/importdoc';
import { ReactiveFormsDoc } from '@doc/togglebutton/reactiveformsdoc';
import { StyleDoc } from '@doc/togglebutton/styledoc';

@Component({
    templateUrl: './togglebuttondemo.html',
    standalone: false
})
export class ToggleButtonDemo {
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
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
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
