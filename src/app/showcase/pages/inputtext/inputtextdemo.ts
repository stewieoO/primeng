import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/inputtext/accessibilitydoc';
import { BasicDoc } from '@doc/inputtext/basicdoc';
import { FilledDoc } from '@doc/inputtext/filleddoc';
import { ReactiveFormsDoc } from '@doc/inputtext/reactiveformsdoc';
import { StyleDoc } from '@doc/inputtext/styledoc';
import { DisabledDoc } from 'src/app/showcase/doc/inputtext/disableddoc';
import { FloatLabelDoc } from 'src/app/showcase/doc/inputtext/floatlabeldoc';
import { HelpTextDoc } from 'src/app/showcase/doc/inputtext/helptextdoc';
import { ImportDoc } from 'src/app/showcase/doc/inputtext/importdoc';
import { InvalidDoc } from 'src/app/showcase/doc/inputtext/invaliddoc';

@Component({
    templateUrl: './inputtextdemo.html',
    styleUrls: ['./inputtextdemo.scss'],
    standalone: false
})
export class InputTextDemo {
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
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
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
