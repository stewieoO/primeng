import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/inputswitch/accessibilitydoc';
import { BasicDoc } from '@doc/inputswitch/basicdoc';
import { DisabledDoc } from '@doc/inputswitch/disableddoc';
import { ImportDoc } from '@doc/inputswitch/importdoc';
import { InvalidDoc } from '@doc/inputswitch/invaliddoc';
import { PreselectionDoc } from '@doc/inputswitch/preselectiondoc';
import { ReactiveFormsDoc } from '@doc/inputswitch/reactiveformsdoc';
import { StyleDoc } from '@doc/inputswitch/styledoc';

@Component({
    templateUrl: './inputswitchdemo.html',
    standalone: false
})
export class InputSwitchDemo {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDoc
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
