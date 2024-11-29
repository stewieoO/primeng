import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/tristatecheckbox/accessibilitydoc';
import { BasicDoc } from '@doc/tristatecheckbox/basicdoc';
import { DisabledDoc } from '@doc/tristatecheckbox/disableddoc';
import { FilledDoc } from '@doc/tristatecheckbox/filleddoc';
import { ImportDoc } from '@doc/tristatecheckbox/importdoc';
import { InvalidDoc } from '@doc/tristatecheckbox/invaliddoc';
import { ReactiveFormsDoc } from '@doc/tristatecheckbox/reactiveformsdoc';
import { StyleDoc } from '@doc/tristatecheckbox/styledoc';

@Component({
    templateUrl: './tristatecheckboxdemo.html',
    standalone: false
})
export class TriStateCheckboxDemo {
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
