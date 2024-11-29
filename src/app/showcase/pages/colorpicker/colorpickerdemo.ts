import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/colorpicker/accessibilitydoc';
import { BasicDoc } from '@doc/colorpicker/basicdoc';
import { DisabledDoc } from '@doc/colorpicker/disableddoc';
import { FormatDoc } from '@doc/colorpicker/formatdoc';
import { ImportDoc } from '@doc/colorpicker/importdoc';
import { InlineDoc } from '@doc/colorpicker/inlinedoc';
import { ReactiveFormsDoc } from '@doc/colorpicker/reactiveformsdoc';
import { StyleDoc } from '@doc/colorpicker/styledoc';

@Component({
    templateUrl: './colorpickerdemo.html',
    standalone: false
})
export class ColorPickerDemo {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDoc
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
